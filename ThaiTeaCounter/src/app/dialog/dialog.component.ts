import { Component } from '@angular/core';
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
export class DialogComponent {
  displayedColumns: string[] = ['date', 'time', 'price', 'place'];
  dataSource: ThaiTeaData[] = [];

  constructor (private db: DbService) { }

  test(): void {
    
  }
}
