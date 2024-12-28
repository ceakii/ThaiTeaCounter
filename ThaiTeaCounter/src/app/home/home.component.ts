import { Component } from '@angular/core';
import { Toolbar } from '../toolbar/toolbar.component';
import { Counter } from '../counter/counter.component';
import { ThaiTeaData } from '../thaiteadata';

@Component({
  selector: 'app-home',
  imports: [Toolbar, Counter],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // Thai Tea Data Interface
  thaiTeaData: ThaiTeaData = {
    id: 1,
    name: "Kaiden",
    place: "Omomo",
    month: 12,
    day: 25,
    year: 2024
  }
}
