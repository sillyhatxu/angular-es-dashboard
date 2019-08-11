import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-tab',
  templateUrl: './table-tab.component.html',
  styleUrls: ['./table-tab.component.css']
})
export class TableTabComponent {

  constructor() { }

  @Input('tabTitle') title: string;
  @Input() active = false;

}
