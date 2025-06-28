import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Terminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';

@Component({
  selector: 'app-xterm-demo',
  imports: [MatCardModule],
  templateUrl: './xterm-demo.html',
  styleUrl: './xterm-demo.css'
})
export class XtermDemo implements AfterViewInit {
  @ViewChild('terminalContainer', { static: true }) terminalContainer!: ElementRef;
  terminal!: Terminal;
  private currentLine: string = '';
  private commandHistory: string[] = [];

  constructor() { }

  ngAfterViewInit() {
    // Add a safety check
    if (this.terminalContainer && this.terminalContainer.nativeElement) {
      this.initializeTerminal();
    } else {
      console.error('Terminal container not found');
    }
  }

  initializeTerminal() {
    this.terminal = new Terminal({
      rows: 24,
      cols: 80,
      cursorBlink: true,
      theme: {
        background: '#1f1f1f',
        foreground: '#ffffff',
        cursor: '#ffffff'
      }
    });
    const fitAddon = new FitAddon();
    this.terminal.loadAddon(fitAddon);
    
    this.terminal.open(this.terminalContainer.nativeElement);
    
    // Welcome message
    this.terminal.writeln('Welcome to XTerm.js in Angular!');
    this.terminal.writeln('Available commands: help, clear, echo, date');
    this.terminal.writeln('');
    this.showPrompt();
    
    // Set up input handling
    this.setupInputHandling();
  }

  private setupInputHandling() {
    this.terminal.onData((data) => {
      const code = data.charCodeAt(0);
      
      // Handle Enter key
      if (code === 13) {
        this.handleCommand(this.currentLine.trim());
        this.currentLine = '';
        return;
      }
      
      // Handle Backspace
      if (code === 127 || code === 8) {
        if (this.currentLine.length > 0) {
          this.currentLine = this.currentLine.slice(0, -1);
          this.terminal.write('\b \b');
        }
        return;
      }
      
      // Handle Ctrl+C
      if (code === 3) {
        this.terminal.writeln('^C');
        this.currentLine = '';
        this.showPrompt();
        return;
      }
      
      // Handle regular characters
      if (code >= 32 && code <= 126) {
        this.currentLine += data;
        this.terminal.write(data);
      }
    });
  }

  private handleCommand(command: string) {
    this.terminal.writeln('');
    
    if (command.length === 0) {
      this.showPrompt();
      return;
    }
    
    this.commandHistory.push(command);
    
    const parts = command.split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);
    
    switch (cmd) {
      case 'help':
        this.terminal.writeln('Available commands:');
        this.terminal.writeln('  help     - Show this help message');
        this.terminal.writeln('  clear    - Clear the terminal');
        this.terminal.writeln('  echo     - Echo text back');
        this.terminal.writeln('  date     - Show current date and time');
        this.terminal.writeln('  history  - Show command history');
        break;
        
      case 'clear':
        this.terminal.clear();
        break;
        
      case 'echo':
        if (args.length > 0) {
          this.terminal.writeln(args.join(' '));
        } else {
          this.terminal.writeln('Usage: echo <text>');
        }
        break;
        
      case 'date':
        this.terminal.writeln(new Date().toString());
        break;
        
      case 'history':
        this.commandHistory.forEach((cmd, index) => {
          this.terminal.writeln(`${index + 1}: ${cmd}`);
        });
        break;
        
      default:
        this.terminal.writeln(`Command not found: ${cmd}`);
        this.terminal.writeln('Type "help" for available commands');
        break;
    }
    
    this.showPrompt();
  }

  private showPrompt() {
    this.terminal.write('\r\n$ ');
  }
}
