import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiResponse } from '../app.component';
import { ErrorHandlingService } from '../services/error-handling.service';

export interface Episodes {
  name: string;
}

@Component({
  selector: 'episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.css'],
})
export class EpisodesListComponent implements OnInit {
  episodes: Episodes[] = [];

  constructor(
    private http: HttpClient,
    private errorService: ErrorHandlingService
  ) {}

  ngOnInit() {
    this.http
      .get<ApiResponse<Episodes>>('https://rickandmortyapi.com/api/episode')
      .subscribe({
        next: (response) => {
          this.episodes = response.results;
        },
        error: (err) => {
          this.errorService.handle404(err);
        },
      });
  }
}
