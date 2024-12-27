import { Component, Input } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'counterbutton',
  imports: [MatDividerModule, MatButtonModule],
  templateUrl: './counterbutton.component.html',
  styleUrl: './counterbutton.component.css'
})
export class CounterButton {
  @Input() curCounter: number = 0;
}
