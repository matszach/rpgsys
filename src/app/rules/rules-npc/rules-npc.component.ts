import { Component, OnInit } from '@angular/core';
import { URLS } from 'src/app/data-source/data-urls'; 

@Component({
  selector: 'app-rules-npc',
  templateUrl: './rules-npc.component.html',
  styleUrls: ['./rules-npc.component.css']
})
export class RulesNpcComponent implements OnInit {

  // root url
  root = URLS.npc;

  constructor() { }

  ngOnInit() {
  }

}
