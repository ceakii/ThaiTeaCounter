import { Component, Output, EventEmitter } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'removebutton',
  imports: [MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './removebutton.component.html',
  styleUrl: './removebutton.component.css'
})
export class RemoveButton {
  @Output() decrementCounterEvent = new EventEmitter<boolean>();
  decrementCounter() { this.decrementCounterEvent.emit(true); }
}
