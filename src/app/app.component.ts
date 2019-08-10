import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { InitialService } from './services/initial.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-es-dashboard';

  public esUrl: string

  constructor(private initialService: InitialService) {
    var _that = this
    this.initialService.initialData().subscribe(function (data) {
      console.log(data)
      environment.serverHost = data.data.server_host
      environment.esScheme = data.data.scheme
      environment.esUrl = data.data.url
      _that.esUrl = environment.esUrl
    })

  }


  requestData(url: string) {
    this.esUrl = url

  }
}
