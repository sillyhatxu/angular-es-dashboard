import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

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
