import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  pageName = 'PAGE 1'

  constructor() {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.pageName = 'Hey I came';
    }, 5000)
  }

  onButtonClick(): void {
    alert("Today::: " + new Date());
  }

}
