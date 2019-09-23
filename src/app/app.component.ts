import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rpgsys';

  url: string = 'assets/features.tsv';

  constructor(){

  }
  
}
