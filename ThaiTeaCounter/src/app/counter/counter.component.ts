import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-counter',
  imports: [
    MatIconModule, 
    MatDividerModule, 
    MatButtonModule, 
    DialogComponent
    ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
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
  incrementCounter(): void {
    // Increment counter and store into local storage
    this.counter = (Number(this.counter) + 1).toString();
    localStorage.setItem("thaiTeaCounter", this.counter);
  }
  decrementCounter(): void {
    // Decrement counter and store into local storage
    if(Number(this.counter) > 0) {
      this.counter = (Number(this.counter) - 1).toString();
      localStorage.setItem("thaiTeaCounter", this.counter);
    }
  }

  // Dialog function
  readonly dialog = inject(MatDialog);
  openDialog(): void{
    const dialogRef = this.dialog.open(DialogComponent);
  }
}
