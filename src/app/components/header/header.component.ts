import { Component, OnInit, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { ElasticsearchService } from 'src/app/services/elasticsearch.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public status = false

  @Input() esUrl: string // 通过input接收父组件传值

  //EventEmitter实现子组件传值给父组件
  @Output() toparent = new EventEmitter()

  constructor(private elasticsearchService: ElasticsearchService) {

  }

  ngOnInit() {

  }

  connectES() {
    var _that = this
    this.elasticsearchService.connect(this.esUrl).subscribe(function (data) {
      if (data.code == "SUCCESS") {
        _that.status = true
        _that.toparent.emit()
        // this.toparent.emit('panel-c value')
      } else {
        alert(data.message)
      }
    })
  }

}
