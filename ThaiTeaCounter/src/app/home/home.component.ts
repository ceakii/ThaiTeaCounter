import { Component } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { CounterComponent } from '../counter/counter.component';
import { ThaiTeaData } from '../thaiteadata';

@Component({
  selector: 'app-home',
  imports: [ToolbarComponent, CounterComponent],
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
