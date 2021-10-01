import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  @Input() searchResults;
  @Input() defaultColor: string = 'transparent';
  @Input() results;
  constructor() { }



  ngOnInit(): void {
  }

}
