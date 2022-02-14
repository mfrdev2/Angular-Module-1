import {Component, ViewChild} from '@angular/core';
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-first-project';
  @ViewChild("footer")
  footer!: FooterComponent;

  updateLastAccess():void{
    this.footer.lastAccess = new Date().toDateString();
  }
}

