import {Component, OnInit, ViewChild} from '@angular/core';
import {FooterComponent} from "./footer/footer.component";
import {Page2Component} from "./page2/page2.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-first-project';
  @ViewChild("footer")
  footer!: FooterComponent;
  @ViewChild("page2")
  page2!: Page2Component;

  startTime!: string;
  currentPage!: number;

  updateLastAccess(): void {
    let date = new Date();
    this.footer.lastAccess = date.toDateString() + ' | ' + date.toTimeString();
  }

  ngOnInit(): void {
    this.currentPage = 1;
    let date = new Date();
    this.startTime = date.toDateString() + ' | ' + date.toTimeString();
  }

  onHitIncrement(page: number): void {
    this.currentPage = page;
    if (page === 2) {
      this.page2.incrementHitCounter();
    }
  }


}

