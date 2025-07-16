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
import { db } from '../database/db.service';

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
    date: new FormControl<Date>(new Date(), Validators.required),
    time: new FormControl<Date>(new Date(), Validators.required),
    price: new FormControl<number>(0, Validators.required),
    place: new FormControl<string>("", Validators.required)
  })

  // Adds form data into DB and updates counter + history
  onSubmit() {
    let fullDate: Date = this.thaiTeaForm.value.date ?? new Date();
    fullDate.setHours(Number(this.thaiTeaForm.value.time?.getHours()));
    fullDate.setMinutes(Number(this.thaiTeaForm.value.time?.getMinutes()));
    db.addData(fullDate,
      Number(this.thaiTeaForm.value.price),
      String(this.thaiTeaForm.value.place)
    );
  }
}
