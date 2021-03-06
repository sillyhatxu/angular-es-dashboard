import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeadComponent } from './components/head/head.component';
import { FixedPluginComponent } from './components/fixed-plugin/fixed-plugin.component';
import { CircularProgressBarComponent } from './components/circular-progress-bar/circular-progress-bar.component';
import { CustomPreloadingStrategyServiceService } from './services/custom-preloading-strategy-service.service';
import { PreloadingComponent } from './components/preloading/preloading.component';
import { IndicesComponent } from './components/indices/indices.component';
import { QueryComponent } from './components/query/query.component';
import { ToolsComponent } from './components/tools/tools.component';
import { HelpComponent } from './components/help/help.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { UpgradeComponent } from './components/upgrade/upgrade.component';
import { IndexComponent } from './components/index/index.component';
import { TableTabComponent } from './components/table-tab/table-tab.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HeadComponent,
    FixedPluginComponent,
    CircularProgressBarComponent,
    PreloadingComponent,
    IndicesComponent,
    QueryComponent,
    ToolsComponent,
    HelpComponent,
    NotificationsComponent,
    UpgradeComponent,
    IndexComponent,
    TableTabComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CustomPreloadingStrategyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}
