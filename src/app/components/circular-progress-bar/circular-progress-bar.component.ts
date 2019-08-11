import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-circular-progress-bar',
  templateUrl: './circular-progress-bar.component.html',
  // styleUrls: ['./circular-progress-bar.component.css']
  styleUrls: ['./circular-progress-bar.component.scss']
})
export class CircularProgressBarComponent implements OnInit {

  @Input() percentage: number = 0
  @Input() name: string = ""

  constructor() {

  }

  ngOnInit() {
  }

}
