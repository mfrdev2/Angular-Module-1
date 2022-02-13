import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  pageRequest = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

  onPageChange(page: number): void {
    this.pageRequest = page;
  }


}
