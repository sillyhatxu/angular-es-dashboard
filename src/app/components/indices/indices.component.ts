import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { ElasticsearchService } from 'src/app/services/elasticsearch.service';
import { MappingsDTO } from 'src/app/dto/EsMappings';

@Component({
  selector: 'app-indices',
  templateUrl: './indices.component.html',
  styleUrls: ['./indices.component.css']
})
export class IndicesComponent implements OnInit {

  public esUrl: string

  public mappings: Array<MappingsDTO>

  constructor(private storageService: StorageService, private elasticsearchService: ElasticsearchService) {
    this.esUrl = storageService.getItem("es_url")
  }

  ngOnInit() {
    this.connectSuccess()
  }

  connectSuccess() {
    var _that = this
    this.elasticsearchService.mappings().subscribe(function (data) {
      _that.mappings = data.data
    })
  }
}
