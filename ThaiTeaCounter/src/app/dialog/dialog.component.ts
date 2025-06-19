import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThaiTeaData } from '../thaitea/thaiteadata';
import { ThaiTeaDataService } from '../thaitea/thaiteadata.service';

@Component({
  selector: 'app-dialog',
  imports: [MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent implements OnInit {
  displayedColumns: string[] = ['date', 'time', 'price', 'place'];
  dataSource: ThaiTeaData[] = [];

  constructor (private thaiTeaDataService: ThaiTeaDataService) { }

  ngOnInit(): void {
    this.dataSource = this.thaiTeaDataService.history;
  }

  test(): void {
    console.log(this.thaiTeaDataService.history);
    console.log(this.thaiTeaDataService.toString(this.thaiTeaDataService.history));
  }
}
