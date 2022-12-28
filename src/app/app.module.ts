import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { EpisodesListComponent } from './episodes-list/episodes-list.component';
import { CommonModule } from '@angular/common';
import { ErrorHandlingService } from './services/error-handling.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, CommonModule],
  declarations: [AppComponent, HelloComponent, EpisodesListComponent], 
  bootstrap: [AppComponent],
  providers: [ErrorHandlingService]
})
export class AppModule {}
