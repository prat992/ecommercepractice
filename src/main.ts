import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module'; 
import { importProvidersFrom, LOCALE_ID } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeIN from '@angular/common/locales/en-IN';
registerLocaleData(localeIN, 'en-IN');
bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(),importProvidersFrom(AppRoutingModule),{ provide: LOCALE_ID, useValue: 'en-IN' } ]
})
  .catch((err) => console.error(err));
