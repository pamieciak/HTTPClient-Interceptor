import { Component } from '@angular/core';
import {
  filter,
  fromEvent,
  interval,
  map,
  tap,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs';

@Component({
  selector: 'rxjs-basic',
  templateUrl: './rxjs-basic.component.html',
  styleUrls: ['./rxjs-basic.component.css'],
})
export class RxjsBasicComponent {
  ngOnInit() {
    // const button = document.getElementById('btn');

    // fromEvent(button, 'click').subscribe(() => {
    //   console.log('z fromEvent');
    // });

    // 1. dopiero po 3 literce reakcja
    // 2. opóźnienie 1000 ms
    // 3. nie reaguje gdy nie ma zmian
    const input = document.getElementById('input') as HTMLInputElement;

    fromEvent(input, 'input')
      .pipe(
        map((event) => (event.target as HTMLInputElement).value),
        filter((value) => value.length > 3),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe(console.log);
  }
}
