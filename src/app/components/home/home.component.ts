import { Component, OnInit } from '@angular/core';
import { ElasticsearchService } from 'src/app/services/elasticsearch.service';
import { InitialService } from 'src/app/services/initial.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public version: string
  constructor() { }

  ngOnInit() {

  }

  initialPage() {

  }


}
