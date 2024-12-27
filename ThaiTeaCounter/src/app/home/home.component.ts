import { Component } from '@angular/core';
import { Toolbar } from '../toolbar/toolbar.component';
import { CounterButton } from '../counterbutton/counterbutton.component';
import { AddButton } from '../addbutton/addbutton.component';
import { RemoveButton } from '../removebutton/removebutton.component';
import { ThaiTeaData } from '../thaiteadata';

@Component({
  selector: 'app-home',
  imports: [Toolbar, CounterButton, AddButton, RemoveButton],
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

  // Counter functionality
  counter = 0;
  incrementCounter() { this.counter++; console.log("Counter: " + this.counter) }
  decrementCounter() { this.counter--; console.log("Counter: " + this.counter) }
}
