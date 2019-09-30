import { Component, OnInit } from '@angular/core';
import { URLS } from 'src/app/data-source/data-urls';

@Component({
  selector: 'app-rules-character-creation',
  templateUrl: './rules-character-creation.component.html',
  styleUrls: ['./rules-character-creation.component.css']
})
export class RulesCharacterCreationComponent implements OnInit {

  // root url
  root = URLS.characterCreation;

  constructor() { }

  ngOnInit() {
  }

}
