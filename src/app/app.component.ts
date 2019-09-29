import { Component } from '@angular/core';
import { URLS } from './data-source/data-urls'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rpgsys';

  url: string = URLS.resources.features.features;
  purl: string = URLS.coreMechanics.skillChecks.paragraph;

  constructor() {
  }
  
}
