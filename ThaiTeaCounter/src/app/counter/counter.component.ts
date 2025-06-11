import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-counter',
  imports: [
    MatIconModule, 
    MatDividerModule, 
    MatButtonModule
    ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  // Class variables
  counter: string | null = "0";

  constructor(private cookieService: CookieService) {
    // Check if cookie exists, if not create one
    if(!this.cookieService.check("thaiTeaCounter")) {
      this.cookieService.set("thaiTeaCounter", "0");
    }
  }

  // Reload cookie counter val into class val
  ngOnInit() {
    // Intialize counter with cookie's counter val
    this.counter = this.cookieService.get("thaiTeaCounter");
  }

  // Counter functions
  incrementCounter(): void {
    // Increment counter and store into local storage
    this.counter = (Number(this.counter) + 1).toString();
    this.cookieService.set("thaiTeaCounter", this.counter);


  }
  decrementCounter(): void {
    // Decrement counter and store into local storage
    if(Number(this.counter) > 0) {
      this.counter = (Number(this.counter) - 1).toString();
      this.cookieService.set("thaiTeaCounter", this.counter);
    }
  }

  // Dialog function
  readonly dialog = inject(MatDialog);
  openDialog(): void{
    const dialogRef = this.dialog.open(DialogComponent);
  }
}
