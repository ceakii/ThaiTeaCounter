import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';

import { ThaiTeaData } from '../database/thaiteadata';
import { db } from '../database/db.service';

@Component({
  selector: 'app-history',
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'date', 'price', 'place'];
  dataSource = new MatTableDataSource<ThaiTeaData>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  historyCount = () => db.getHistoryCount();

  ngAfterViewInit() {
    db.getHistory$().subscribe(
      next => {
        this.dataSource.data = next;
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // TODO: Remove following methods later; For testing purposes

  addData() {
    db.addData(new Date(), 0, "test");
    console.log("REMOVE LATER: Added data to the DB and table");
  }

  // Removes the last data from the DB and table and re-render's view
  removeLastData(): void {
    db.removeLastData();
    console.log("REMOVE LATER: Removed the latest data from the DB and table");
  }

  modifyData() {
    db.modifyData(2, new Date(), 1, "modified");
    console.log("REMOVE LATER: Modified entry #2 in the DB and table")
  }
}
