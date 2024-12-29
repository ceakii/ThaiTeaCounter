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
  // Class variables
  counter: string | null = "0";

  // Reload local storage counter val into class val
  ngOnInit() {
    // If counter does not exist in local storage, make one
    if(localStorage.getItem("thaiTeaCounter") === null)
      localStorage.setItem("thaiTeaCounter", "0")

    // Intialize counter with local storage's counter val
    this.counter = localStorage.getItem("thaiTeaCounter");
  }

  // Counter functions
  incrementCounter() {
    // Increment counter and store into local storage
    this.counter = (Number(this.counter) + 1).toString();
    localStorage.setItem("thaiTeaCounter", this.counter);
  }
  decrementCounter() {
    // Decrement counter and store into local storage
    this.counter = (Number(this.counter) - 1).toString();
    localStorage.setItem("thaiTeaCounter", this.counter);
  }
}
