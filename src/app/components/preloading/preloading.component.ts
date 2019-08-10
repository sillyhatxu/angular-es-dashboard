import { Component, OnInit } from '@angular/core';
import { InitialService } from 'src/app/services/initial.service';

@Component({
  selector: 'app-preloading',
  templateUrl: './preloading.component.html',
  styleUrls: ['./preloading.component.css']
})
export class PreloadingComponent implements OnInit {

  constructor(private initialService: InitialService) {
    console.log(1)
    this.initialService.initialData()
    console.log(2)
  }

  ngOnInit() {

  }

}
