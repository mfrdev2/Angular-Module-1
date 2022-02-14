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
    let date = new Date();
    this.footer.lastAccess = date.toDateString() +' | '+ date.toTimeString() ;
  }
}

