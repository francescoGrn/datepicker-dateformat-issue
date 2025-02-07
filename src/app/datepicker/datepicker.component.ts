import { Component } from '@angular/core';
import { DatePickerModule } from 'primeng/datepicker';
import {FormsModule} from "@angular/forms";
import { ButtonModule } from 'primeng/button';
import { data } from 'autoprefixer';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  standalone: true,
  imports: [FormsModule, DatePickerModule, ButtonModule],
})

export class DatePickerComponent {
  date: Date | undefined;
  format = 'dd/mm/yy';

  onChangeFormat1() {
    this.format = 'dd/mm/yy';
  }

  onChangeFormat2() {
    this.format = 'mm/dd/yy';
  }

  protected readonly data = data;
}
