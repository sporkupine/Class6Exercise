import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<string>();
  @Output() searchResult: string;
  addResult(value: string) {
    this.searchEvent.emit(value)
  }


  constructor() { }

  ngOnInit(): void {
  }
}
