import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  pageRequest = 1;
  @Output()
  onPageChangeEvent = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onPageChange(page: number): void {
    this.pageRequest = page;
    this.onPageChangeEvent.emit(page);
  }


}
