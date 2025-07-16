import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HistoryComponent } from '../history/history.component';
import { MatDialog } from '@angular/material/dialog';
import { db } from '../database/db.service';

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
  counter: number = 0;

  constructor(private cd: ChangeDetectorRef) { }

  // Initialize counter from db
  ngOnInit() {
    db.counter$.subscribe(
      (next: number) => {
        this.counter = next;
        this.cd.detectChanges();
      });
  }

  // Counter functions
  async incrementCounter(): Promise<void> {
    // Increment counter and store into database
    ++this.counter;
    await db.addData(new Date(), 0, "not specified");
  }

  async decrementCounter(): Promise<void> {
    // Decrement counter and store into database
    if(Number(this.counter) > 0) {
      --this.counter;
      await db.removeLastData();
    }
  }

  // Dialog function
  readonly dialog = inject(MatDialog);
  openDialog(): void {
    const dialogRef = this.dialog.open(HistoryComponent);
  }
}
