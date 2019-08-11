import { Component, OnInit } from '@angular/core';

import { InitialService } from 'src/app/services/initial.service';
import { ElasticsearchService } from 'src/app/services/elasticsearch.service';
import { environment } from 'src/environments/environment';
import { HomeDTO } from 'src/app/dto/HomeDTO';
import { EsIndices } from 'src/app/dto/EsIndices';
import { EsHealth } from 'src/app/dto/EsHealth';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public version: string

  public esUrl: string

  public updateTimeElasticsearch = Date.now()

  public updateTimeESIndices = Date.now()

  public indices: Array<EsIndices> = []

  public esHealthArray: Array<EsHealth> = []

  public totalShardsCount: number = 0

  public indicesCount: number = 0

  public totalSizeCount: number = 0

  public memPercentage: number = 0
  public memName: string = "Mem"

  public fsPercentage: number = 0
  public fsName: string = "Fs"

  public fieldDataPercentage: number = 0
  public fieldDataName: string = "FieldData"

  public queryCachePercentage: number = 0
  public queryCacheName: string = "QueryCache"

  constructor(private initialService: InitialService, private elasticsearchService: ElasticsearchService, private storageService: StorageService) {
    var _that = this
    this.initialService.initialData().subscribe(function (data) {
      environment.serverHost = data.data.server_host
      environment.esUrl = data.data.url
      storageService.setItem("es_url", environment.esUrl)
      _that.esUrl = environment.esUrl
    })
  }

  ngOnInit() {

  }

  // connectSuccess(e) {
  connectSuccess() {
    var _that = this
    var homeDTO: HomeDTO
    this.elasticsearchService.health().subscribe(function (data) {
      data.data.forEach(element => {
        _that.esHealthArray.splice(0, _that.esHealthArray.length)
        const esHealth = new EsHealth()
        esHealth.epoch = element.epoch
        esHealth.timestamp = element.timestamp
        esHealth.cluster = element.cluster
        esHealth.status = element.status
        esHealth.shards = element.shards
        esHealth.pri = element.pri
        esHealth.relo = element.relo
        esHealth.init = element.init
        esHealth.unassign = element.unassign
        esHealth.nodeTotal = element['node.total']
        esHealth.nodeData = element['node.data']
        esHealth.pendingTasks = element['pending_tasks']
        esHealth.maxTaskWaitTime = element['max_task_wait_time']
        esHealth.activeShardsPercent = element['active_shards_percent']
        _that.esHealthArray.push(esHealth)
      });
    })
    this.elasticsearchService.version().subscribe(function (data) {
      _that.version = data.data
    })
    this.elasticsearchService.indices().subscribe(function (data) {
      _that.updateTimeESIndices = Date.now()
      _that.indices.splice(0, _that.indices.length)
      data.data.forEach(element => {
        const esIndices = new EsIndices()
        esIndices.index = element.index
        esIndices.status = element.status
        esIndices.health = element.health
        esIndices.count = element['docs.count']
        esIndices.size = element['store.size']
        _that.indices.push(esIndices)
      });
    })
    this.elasticsearchService.clusterStats().subscribe(function (data) {
      _that.totalShardsCount = 8
      _that.indicesCount = 3
      _that.totalSizeCount = 2358
      _that.memPercentage = 10
      _that.fsPercentage = 25
      _that.fieldDataPercentage = 45
      _that.queryCachePercentage = 80
      _that.updateTimeElasticsearch = Date.now()
    })
  }

}
