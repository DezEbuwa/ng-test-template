import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { MatChipSet, MatChip } from '@angular/material/chips';

@Component({
  selector: 'app-signals-listener',
  imports: [MatChipSet, MatChip],
  template: `
    <div class="signals-listener" [style.background-color]="bgColor()">
      <mat-chip-set aria-label="Selected Color">
        <mat-chip class="color-chip">{{ bgColor() }}</mat-chip>
        <mat-chip class="label-chip">SIGNAL LISTENER</mat-chip>
      </mat-chip-set>
      
    </div>  
  `,
  styles: `
    .signals-listener {
      padding: 10px;
      max-width: 200px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    .color-chip {
      background-color: #f1f1f1 !important;
      
    }

    .label-chip {
      background-color: #f1f1f1 !important;
      font-weight: bold;
      font-size: 1.8rem;
      
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush // This ensures signals work properly
})
export class SignalsListener {
  bgColor = signal('#ffffff');
  
  updateColor(color: string) {
    this.bgColor.set(color);
  }

}