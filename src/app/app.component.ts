import {Component,OnInit, ViewChild} from '@angular/core';
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-first-project';
  @ViewChild("footer")
  footer!: FooterComponent;

  startTime!: string;

  updateLastAccess():void{
    let date = new Date();
    this.footer.lastAccess = date.toDateString() +' | '+ date.toTimeString() ;
  }

  ngOnInit(): void {
    let date = new Date();
    this.startTime = date.toDateString() +' | '+ date.toTimeString() ;
  }


}

