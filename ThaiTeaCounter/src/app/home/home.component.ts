import { Component } from '@angular/core';
import { Toolbar } from '../toolbar/toolbar.component';
import { CounterButton } from '../counterbutton/counterbutton.component';
import { AddButton } from '../addbutton/addbutton.component';
import { ThaiTeaData } from '../thaiteadata';

@Component({
  selector: 'app-home',
  imports: [Toolbar, CounterButton, AddButton],
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
