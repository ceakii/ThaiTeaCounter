import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'addbutton',
  imports: [MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './addbutton.component.html',
  styleUrl: './addbutton.component.css'
})
export class AddButton {

}
