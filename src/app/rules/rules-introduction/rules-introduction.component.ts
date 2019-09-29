import { Component, OnInit } from '@angular/core';
import { URLS } from 'src/app/data-source/data-urls';

@Component({
  selector: 'app-rules-introduction',
  templateUrl: './rules-introduction.component.html',
  styleUrls: ['./rules-introduction.component.css']
})
export class RulesIntroductionComponent implements OnInit {

  // root url
  root = URLS.introduction;

  constructor() { 
  }

  ngOnInit() {
  }

}
