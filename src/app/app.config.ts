import { CommonModule } from '@angular/common';
import { ApplicationConfig} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';


export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    providePrimeNG({
      theme: {
        preset: Aura
      }
    })
  ],
};
