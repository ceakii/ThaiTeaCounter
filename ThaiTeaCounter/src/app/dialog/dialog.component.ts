import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ThaiTeaData } from '../thaiteadata';

const THAI_TEA_DATA: ThaiTeaData[] = [
  {date: '06/08/2025', time: '14:25', price: 6.50, place: 'Vanitea'},
  {date: '06/07/2025', time: '15:56', price: 10.5, place: 'Surf City Squeeze'},
  {date: '06/05/2025', time: '12:01', price: 8.25, place: 'Omomo'},
];

@Component({
  selector: 'app-dialog',
  imports: [MatTableModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  displayedColumns: string[] = ['date', 'time', 'price', 'place'];
  dataSource = THAI_TEA_DATA;
}
