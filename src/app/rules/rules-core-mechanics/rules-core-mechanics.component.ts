import { Component, OnInit } from '@angular/core';
import { URLS } from 'src/app/data-source/data-urls';

@Component({
  selector: 'app-rules-core-mechanics',
  templateUrl: './rules-core-mechanics.component.html',
  styleUrls: ['./rules-core-mechanics.component.css']
})
export class RulesCoreMechanicsComponent implements OnInit {

  // root url
  root = URLS.coreMechanics;

  constructor() { }

  ngOnInit() {
  }

}
