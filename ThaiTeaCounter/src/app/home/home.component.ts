import { Component, inject } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { CounterComponent } from '../counter/counter.component';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ThaiTeaFormComponent } from '../thaiteaform/thaiteaform.component';

@Component({
  selector: 'app-home',
  imports: [
    ToolbarComponent,
    CounterComponent,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // Dialog function
  readonly dialog = inject(MatDialog);
  openDialog(): void {
    const dialogRef = this.dialog.open(ThaiTeaFormComponent);
  }
}
