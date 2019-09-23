import { Component } from '@angular/core';
import { DataFetcherService } from './data-source/data-fetcher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rpgsys';

  values: Array<Array<string>>;

  constructor(private s: DataFetcherService){
    s.readAsset(s.urls.features).subscribe(data => this.values = s.parseTsv(data)); 
  }
  
}
