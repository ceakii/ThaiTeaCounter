import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HistoryComponent } from '../history/history.component';
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
  counter: number = 0;

  constructor(private db: DbService, private cd: ChangeDetectorRef) { }

  // Initialize counter from db
  ngOnInit() {
    this.db.counter$.subscribe(
      (next: number) => {
        this.counter = next;
        this.cd.detectChanges();
      });
  }

  // Counter functions
  async incrementCounter(): Promise<void> {
    // Increment counter and store into database
    ++this.counter;
    await this.db.setCount(0, this.counter);
  }

  async decrementCounter(): Promise<void> {
    // Decrement counter and store into database
    if(Number(this.counter) > 0) {
      --this.counter;
      await this.db.setCount(0, this.counter);
    }
  }

  // Dialog function
  readonly dialog = inject(MatDialog);
  openDialog(): void {
    const dialogRef = this.dialog.open(HistoryComponent);
  }
}
