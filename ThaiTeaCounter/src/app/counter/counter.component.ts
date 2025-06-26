import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DbService } from '../database/db.service';

@Component({
  selector: 'app-counter',
  imports: [
    MatIconModule,
    MatButtonModule
    ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit {
  counter: string | null = "0";

  constructor(private db: DbService) { }

  async ngOnInit(): Promise<void> {
    // Initialize counter from db
    console.log("Initializing counter from database...");
    if ((await this.db.table('counter').toArray()).length <= 0) {
      console.log("No counter found in database, initializing to 0.");
      this.counter = "0";
      await this.db.table('counter').add({ value: 0 });
    }
  }

  // Counter functions
  incrementCounter(): void {
    // Increment counter and store into cookie
    this.counter = (Number(this.counter) + 1).toString();

    // Update ThaiTeaDataService history
    // TODO: Create add data function in ThaiTeaDataService
    /*
    this.db.history.push({
      date: "date_here",
      time: "time_here",
      price: 420.69,
      place: "place_here"
    });
    */
  }

  decrementCounter(): void {
    // Decrement counter and store into cookie
    if(Number(this.counter) > 0) {
      this.counter = (Number(this.counter) - 1).toString();
    }
  }

  // Dialog function
  readonly dialog = inject(MatDialog);
  openDialog(): void{
    const dialogRef = this.dialog.open(DialogComponent);
  }
}
