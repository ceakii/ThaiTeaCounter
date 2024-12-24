import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toolbar } from './toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  imports: [Toolbar],
  template: `
    <main>
      <toolbar></toolbar>

      <p>Counter coming soon...</p>
      <img
        src="/images/thai_tea.png"
        alt="thai tea"
        width="400"
        height="500"
      >
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ThaiTeaCounter';
}
