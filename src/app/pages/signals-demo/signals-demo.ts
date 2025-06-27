import { Component, signal, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SignalsListener } from './signals-listener';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signals-demo',
  imports: [MatCardModule, SignalsListener, CommonModule, FormsModule],
  templateUrl: './signals-demo.html',
  styleUrl: './signals-demo.css'
})
export class SignalsDemo implements AfterViewInit {
  @ViewChildren(SignalsListener) signalsListeners!: QueryList<SignalsListener>;
  
  listenerCount = 30;
  currentColor = signal('#ffffff');
  
  // this is cool I just learned this. This is a quick way to create an array of indices
  // that can be used to create a list of listeners.
  listeners = Array.from({length: this.listenerCount}, (_, i) => i);

  constructor() {
    // Initialize the current color signal
    this.currentColor.set('#ffffff');
  }

  ngAfterViewInit() {
    // debug to make sure that all listeners are initialized. 
    // console.log('Found listeners:', this.signalsListeners.length);
  }

  update(event: Event) {
    const color = (event.target as HTMLInputElement).value;
    this.currentColor.set(color);
    
    // Update all listener instances
    if (this.signalsListeners) {
      this.signalsListeners.forEach((listener, index) => {
        listener.updateColor(color);
      });
    } else {
      console.error('SignalsListener references not found');
    }
  }
}