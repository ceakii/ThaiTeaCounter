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
    this.db.repopulateHistoryView();
    this.db.history$.subscribe(
      (next: ThaiTeaData) => {
        this.dataSource = this.dataSource.concat(next);
      });
  }

  // TODO: Need to input data into this fxn
  // Adds data to the DB and table, and re-render's view
  //addData(d: string, t: string, pr: number, pl: string): void {
  addData() {
    //this.db.addData(d, t, pr, pl);
    this.db.addData("test", "test", 0, "test");
    console.log("(FINISH INPUT LATER) Added data to the DB and table");
  }

  // Removes the last data from the DB and table and re-render's view
  removeLastData(): void {
    this.db.removeLastData();
    this.dataSource.pop();
    this.dataSource = this.dataSource.slice();
    console.log("Removed the latest data from the DB and table");
  }

  // TODO: Need to add input for this fxn
  // Modifies a data entry in history DB and table using their ID, and re-render's view
  //modifyData(id: number, date: string, time: string, price: number, place: string): void {
  modifyData() {
    //this.db.modifyData(id, date, time, price, place);
    this.db.modifyData(2, "modified", "modified", 1, "modified");
    this.dataSource[1] = {
      id: 2,
      date: "modified",
      time: "modified",
      price: 1,
      place: "modified"
    };
    this.dataSource = this.dataSource.slice();
    //console.log(`Modified entry #${id} in the DB and table`);
    console.log("(FINISH INPUT LATER) Modified entry #2 in the DB and table")
  }

  // TODO: Remove later; For testing purposes
  test(): void {
    console.log("test");
  }
}
