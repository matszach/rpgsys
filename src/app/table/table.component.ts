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
  content : Array<Array<string>>;

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
    this.service.readAsset(this.dataSourceUrl).subscribe(data => {
      this.content = this.service.parseTsv(data);
      this.initIsSortedBy(this.content);
    }); 
  }

  initIsSortedBy(data: Array<Array<string>>){
    data[0].forEach(e => this.isSortedBy.push(false));
  }

  resetSortedBy(): void{
    for(var i = 0; i < this.isSortedBy.length; i ++){
      this.isSortedBy[i] = false;
    }
  }

  sortByColumnAscending(columnId: number, data: Array<Array<string>>): Array<Array<string>>{
    return data.slice(0, 1).concat(data.slice(1, data.length-1).sort( (o1, o2) => {
      return this.compareValues(o1[columnId], o2[columnId])
    }));
  }

  sortByColumnDescending(columnId: number, data: Array<Array<string>>): Array<Array<string>>{
    return data.slice(0, 1).concat(data.slice(1, data.length-1).sort( (o1, o2) => {
      return this.compareValues(o2[columnId], o1[columnId])
    }));
  }

  compareValues(v1: string, v2: string): number {
    if(v1 > v2){
      return 1;
    } else {
      return -1;
    }
  }

  subscribeSortedDataAscending(columnId: number){
    this.service.readAsset(this.dataSourceUrl).subscribe(data => {
      this.content = this.service.parseTsv(data);
      this.content = this.sortByColumnAscending(columnId, this.content);
    }); 
  }

  subscribeSortedDataDescending(columnId: number){
    this.service.readAsset(this.dataSourceUrl).subscribe(data => {
      this.content = this.service.parseTsv(data);
      this.content = this.sortByColumnDescending(columnId, this.content);
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
