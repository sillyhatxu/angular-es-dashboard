import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

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
