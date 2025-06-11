import { Component } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-home',
  imports: [ToolbarComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
