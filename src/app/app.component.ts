import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  results: string[] = [];
  addResult(newResult: string) {
    this.results.push(newResult)
  }

}
