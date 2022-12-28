import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, EMPTY } from 'rxjs';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  readonly URL = 'https://rickandmortyapi.com/api';
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('pierwszy interceptor', request);

    const clone = request.clone({
      url: `${this.URL}${request.url}`,
    });

    return next.handle(clone).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('błąd', error);
        return EMPTY
      })
    );
  }
}
