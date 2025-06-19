import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { ThaiTeaDataService } from '../thaitea/thaiteadata.service';

@Component({
  selector: 'app-counter',
  imports: [
    MatIconModule,
    MatButtonModule
    ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter: string | null = "0";

  constructor(private cookieService: CookieService,
    private thaiTeaDataService: ThaiTeaDataService) {
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
    // Increment counter and store into cookie
    this.counter = (Number(this.counter) + 1).toString();
    this.cookieService.set("thaiTeaCounter", this.counter);

    // Update ThaiTeaDataService history
    // TODO: Create add data function in ThaiTeaDataService
    this.thaiTeaDataService.history.push({
      date: "date_here",
      time: "time_here",
      price: 420.69,
      place: "place_here"
    });
  }

  decrementCounter(): void {
    // Decrement counter and store into cookie
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
