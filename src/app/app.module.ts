import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EpisodesListComponent } from './episodes-list/episodes-list.component';
import { CommonModule } from '@angular/common';
import { CustomHttpInterceptor } from './http.interceptor';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, CommonModule],
  declarations: [AppComponent, HelloComponent, EpisodesListComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useValue: {
        intercept(request: any, next: any) {
          console.log('dodatkowy interceptor')
          return next.handle(request);
        },
      },
      multi: true
    },
  ],
})
export class AppModule {}
