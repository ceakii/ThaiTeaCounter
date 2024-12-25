import { Component } from '@angular/core';
import { Toolbar } from '../toolbar/toolbar.component';
import { ThaiTeaData } from '../thaiteadata';

@Component({
  selector: 'app-home',
  imports: [Toolbar],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  thaiTeaData: ThaiTeaData = {
    id: 1,
    name: "Kaiden",
    place: "Omomo",
    month: 12,
    day: 25,
    year: 2024
  }
}
