import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'counter',
  imports: [MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class Counter {
  counter: number = 0;
  incrementCounter() { this.counter++; }
  decrementCounter() { if(this.counter > 0) this.counter--; }
}
