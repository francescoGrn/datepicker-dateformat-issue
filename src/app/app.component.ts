import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ButtonModule} from "primeng/button";
import {DatePickerModule} from "primeng/datepicker";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, DatePickerModule, FormsModule],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'datepicker-dateformat-issue';

  date: Date | undefined;
  dateFormat = 'dd/mm/yy';
  timeFormat = '24';

  setUEFormat() {
    this.dateFormat = 'dd/mm/yy';
    this.timeFormat = '24'
  }

  setUSFormat() {
    this.dateFormat = 'mm/dd/yy';
    this.timeFormat = '12'
  }
}
