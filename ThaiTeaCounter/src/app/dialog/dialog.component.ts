import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThaiTeaData } from '../database/thaiteadata';
import { DbService } from '../database/db.service';

@Component({
  selector: 'app-dialog',
  imports: [MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent implements OnInit {
  displayedColumns: string[] = ['id', 'date', 'time', 'price', 'place'];
  dataSource: ThaiTeaData[] = [];

  constructor (private db: DbService) { }

  // Initialize history from DB and re-render view when new data is added
  ngOnInit() {
    this.db.populateHistoryView();
    this.db.history$.subscribe(
      (next: ThaiTeaData) => {
        this.dataSource = this.dataSource.concat(next);
      });
  }

  // Adds data to the DB and table, and re-render's view
  addData(d: string, t: string, pr: number, pl: string): void {
    this.db.addData(d, t, pr, pl);
    console.log("Added data to the DB and table")
  }

  // Removes the last data from the table and re-render's view
  removeLastData(): void {
    this.db.removeLastData();
    console.log("Removed the latest data from the DB and table");
  }

  // TODO: Remove later; For testing purposes
  test(): void {
    console.log("test");
  }
}
