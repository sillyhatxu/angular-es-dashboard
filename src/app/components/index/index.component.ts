import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

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
