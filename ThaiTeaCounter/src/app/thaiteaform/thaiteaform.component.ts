import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-thaiteaform',
  providers: [provideNativeDateAdapter()],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatTimepickerModule,
    MatIconModule,
    MatButtonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './thaiteaform.component.html',
  styleUrl: './thaiteaform.component.css'
})
export class ThaiTeaFormComponent {
  thaiTeaForm = new FormGroup({
    date: new FormControl<Date | null>(null, Validators.required),
    price: new FormControl<number | null>(null, Validators.required),
    place: new FormControl<string | null>(null, Validators.required)
  })

  onSubmit() {
    console.log("Sending the following data:");
    console.log(`Date: ${this.thaiTeaForm.value.date}`);
    console.log(`Price: ${this.thaiTeaForm.value.price}`);
    console.log(`Place: ${this.thaiTeaForm.value.place}`);
  }
}
