import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  public esUrl: string

  constructor(private storageService: StorageService) {
    this.esUrl = storageService.getItem("es_url")
  }
  ngOnInit() {
  }

  connectSuccess() {
    alert("connectSuccess")
  }
}
