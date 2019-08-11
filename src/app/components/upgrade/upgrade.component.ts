import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css']
})
export class UpgradeComponent implements OnInit {

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
