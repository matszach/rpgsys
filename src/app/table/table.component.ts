import { Component, OnInit, Input } from '@angular/core';
import { DataFetcherService } from '../data-source/data-fetcher.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  // ===== FIELDS =====
  // input sorce url
  @Input() dataSourceUrl: string;

  // data fetcher
  service : DataFetcherService;

  // subsribed content
  headers : Array<string>;
  records : Array<Array<string>>;

  // true for columnt sorted-by
  isSortedBy: Array<boolean> = [];

  // ===== INIT =====
  // constructor injects data service
  constructor(private s: DataFetcherService) {
    this.service = s;
  }

  // Data is loaded here and not in constructor, 
  // because the constructor is called before the Input takes place.
  ngOnInit() {
    this.subscribeInitialData();
  }

  // ===== METHODS =====
  subscribeInitialData(){
    this.service.readTextAsset(this.dataSourceUrl).subscribe(data => {
      var content = this.service.parseTsv(data);
      this.headers = content[0];
      this.records = content.slice(1, content.length-1);
      this.initIsSortedBy();
    }); 
  }

  initIsSortedBy(){
    this.headers.forEach(e => this.isSortedBy.push(false));
  }

  resetSortedBy(): void{
    for(var i = 0; i < this.isSortedBy.length; i ++){
      this.isSortedBy[i] = false;
    }
  }

  sortByColumnAscending(columnId: number, records: Array<Array<string>>): Array<Array<string>>{
    return records.sort( (o1, o2) => {
      return this.compareValues(o1[columnId], o2[columnId])
    });
  }

  sortByColumnDescending(columnId: number, records: Array<Array<string>>): Array<Array<string>>{
    return records.sort( (o1, o2) => {
      return this.compareValues(o2[columnId], o1[columnId])
    });
  }

  compareValues(v1: string, v2: string): number {
    if(v1 > v2){
      return 1;
    } else {
      return -1;
    }
  }

  subscribeSortedDataAscending(columnId: number){
    this.service.readTextAsset(this.dataSourceUrl).subscribe(data => {
      var content = this.service.parseTsv(data);
      this.headers = content[0];
      this.records = this.sortByColumnAscending(columnId, content.slice(1, content.length-1));
     }); 
  }

  subscribeSortedDataDescending(columnId: number){
    this.service.readTextAsset(this.dataSourceUrl).subscribe(data => {
      var content = this.service.parseTsv(data);
      this.headers = content[0];
      this.records = this.sortByColumnDescending(columnId, content.slice(1, content.length-1));
    }); 
  }

  handleSortClick(columnId: number){
    if(this.isSortedBy[columnId]){
      this.subscribeSortedDataDescending(columnId);
      this.resetSortedBy();
    } else {
      this.subscribeSortedDataAscending(columnId);
      this.resetSortedBy();
      this.isSortedBy[columnId] = true;
    }
  }

}
