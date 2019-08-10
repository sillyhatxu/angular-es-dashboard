import { Component, OnInit } from '@angular/core';
import { ElasticsearchService } from 'src/app/services/elasticsearch.service';
import { InitialService } from 'src/app/services/initial.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private elasticsearchService: ElasticsearchService, private initialService: InitialService) { }

  ngOnInit() {
    console.log(1)
    this.initialService.initialData()
    console.log(2)
    this.version()
    console.log(3)
  }

  version() {
    console.log(this.elasticsearchService.version())
  }


}
