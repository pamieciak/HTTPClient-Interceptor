import { HttpClient } from '@angular/common/http';
import { Component, OnInit, VERSION } from '@angular/core';
import { ErrorHandlingService } from './services/error-handling.service';

export interface Character {
  name: string;
}
export interface Location {
  name: string;
}

export interface ApiResponse<T> {
  info: any;
  results: T[];
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  characters: Character[] = [];
  locations: Location[] = [];

  constructor(
    private http: HttpClient,
    private errorService: ErrorHandlingService
  ) {}

  ngOnInit() {
    // fetch('https://rickandmortyapi.com/api/character')
    //   .then((res) => res.json())
    //   .then((response: ApiResponse<Character>) => (this.characters = response.results));

    this.http.get<ApiResponse<Character>>('/character').subscribe({
      next: (response) => {
        this.characters = response.results;
      },
    });
    this.http.get<ApiResponse<Location>>('/location').subscribe({
      next: (response) => {
        this.locations = response.results;
      },
    });

    // this.http.post<{}>('url', {
    //   login: 'username',
    //   password: 'ashd3123',
    // });
  }
}
