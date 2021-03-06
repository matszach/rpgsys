import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataFetcherService {

  // constructor
  constructor(private client: HttpClient) {}

  // reading asset files
  readTextAsset(url: string) {
    return this.client.get(url, {responseType: 'text'});
  }

  readJsonAsset(url: string) {
    return this.client.get(url, {responseType: 'json'});    
  }

  // parsing subsribed data
  parseCsv(rawCsvData: string) : Array<Array<string>>{
    var data = []
    rawCsvData.split('\n').forEach(e => data.push(e.split(',')));
    return data;    
  }

  parseTsv(rawCsvData: string) : Array<Array<string>>{
    var data = []
    rawCsvData.split('\n').forEach(e => data.push(e.split('\t')));
    return data;    
  }



}
