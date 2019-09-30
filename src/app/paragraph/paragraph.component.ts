import { Component, OnInit, Input} from '@angular/core';
import { DataFetcherService } from '../data-source/data-fetcher.service';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {

  // ===== FIELDS =====
  // input sorce url
  @Input() dataSourceUrl: string;

  // data fetcher
  service : DataFetcherService;

  // subsribed text
  paragraph: any;

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

  subscribeInitialData(){
    this.service.readJsonAsset(this.dataSourceUrl).subscribe(data => this.paragraph = data);
  }

}
