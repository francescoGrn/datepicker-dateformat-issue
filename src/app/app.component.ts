import { Component, inject } from '@angular/core';
import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';
import { PrimeNG } from 'primeng/config';
import { DatePickerComponent } from '@src/app/datepicker/datepicker.component';
import { DatePickerModule } from 'primeng/datepicker';

const Syscons = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#FFF9E6',
      100: '#FFF3CC',
      200: '#FFE799',
      300: '#FEDB67',
      400: '#FECF34',
      500: '#FDC301',
      600: '#CB9C01',
      700: '#987501',
      800: '#664E00',
      900: '#332700',
      950: '#191300',
    },
    colorScheme: {
      light: {
        error: '{red.600}',
        ground: {
          background: '{surface.50}',
        },
        primary: {
          contrastColor: '{zinc.900}',
        },
        chat: {
          message: {
            model: {
              border: '{surface.300}',
              background: '{surface.0}',
              color: '{surface.700}',
              mutedColor: '{surface.500}',
            },
            user: {
              border: '{primary.500}',
              background: '{primary.200}',
              color: '{surface.700}',
              mutedColor: '{primary.700}',
            },
          },
        },
      },
      dark: {
        error: '{red.500}',
        ground: {
          background: '{surface.950}',
        },
        chat: {
          message: {
            model: {
              border: '{surface.600}',
              background: '{surface.900}',
              color: '{surface.0}',
              mutedColor: '{surface.400}',
            },
            user: {
              border: '{primary.600}',
              background: '{primary.800}',
              color: '{surface.0}',
              mutedColor: '{primary.400}',
            },
          },
        },
      },
    },
  },
});

@Component({
  selector: 'app-root',
  imports: [DatePickerComponent, DatePickerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  private _config: PrimeNG = inject(PrimeNG);

  constructor() {
    this._config.theme.set({
      preset: Syscons,
      options: {
        darkModeSelector: "[data-theme='dark']",
        cssLayer: {
          name: 'primeng',
          order: 'tailwind-base, primeng, tailwind-utilities',
        },
      },
    });
  }
}
