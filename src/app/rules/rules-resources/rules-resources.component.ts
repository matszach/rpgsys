import { Component, OnInit } from '@angular/core';
import { URLS } from 'src/app/data-source/data-urls';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-rules-resources',
  templateUrl: './rules-resources.component.html',
  styleUrls: ['./rules-resources.component.css']
})
export class RulesResourcesComponent implements OnInit {

  // root url
  root = URLS.resources;

  // effects 
  off = URLS.resources.features.extraordinaryAbilities.effect.offensive;
  off_k;
  prot = URLS.resources.features.extraordinaryAbilities.effect.protective;
  prot_k;
  rang = URLS.resources.features.extraordinaryAbilities.rangeAndArea;
  rang_k;


  constructor() {
    this.off_k = this.prepareKeys(this.off);
    this.prot_k = this.prepareKeys(this.prot);
    this.rang_k = this.prepareKeys(this.rang);;
  }

  ngOnInit() {
  }

  prepareKeys(dict: Object): Array<Object> {
    var keys = [];
    Object.keys(dict).forEach(e =>{
      if(e != 'paragraph'){
        keys.push(e);    
      }
    }) 
    return keys;
  }

}
