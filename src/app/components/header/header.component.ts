import { Component, OnInit, Input, Output, EventEmitter, NgModule } from '@angular/core';

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

  constructor() {

  }

  ngOnInit() {
  }

  connectES() {
    this.toparent.emit(this.esUrl)
  }

}
