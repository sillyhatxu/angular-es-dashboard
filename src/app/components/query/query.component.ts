import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  public esUrl: string

  public obj: any

  constructor(private storageService: StorageService) {
    this.esUrl = storageService.getItem("es_url")
    this.obj = {
      "aaa": "adsfasg",
      "bbb": 123,
      "ccc": true,
      "ddd": {
        "eee": "eee",
        "fff": "fff",
        "ggg": "ggg",
      },
    }
  }
  ngOnInit() {
  }

  connectSuccess() {
    alert("connectSuccess")
  }


  execute() {

  }
}
