import { Component, inject, OnInit, NgZone } from '@angular/core';
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
  counter: number = -1;

  constructor(
    private db: DbService,
    private ngZone: NgZone
  ) { }

  // Initialize counter from db
  async ngOnInit(): Promise<void> {
    const result = await this.db.getCount(0);
    this.ngZone.run(() => {
      this.counter = result;
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
  openDialog(): void{
    const dialogRef = this.dialog.open(DialogComponent);
  }
}
