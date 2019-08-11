import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';/* PreloadAllModules 预加载策略 */
import { HomeComponent } from './components/home/home.component'
import { CustomPreloadingStrategyServiceService } from './services/custom-preloading-strategy-service.service';
import { PreloadingComponent } from './components/preloading/preloading.component';
import { IndicesComponent } from './components/indices/indices.component';
import { QueryComponent } from './components/query/query.component';
import { ToolsComponent } from './components/tools/tools.component';
import { HelpComponent } from './components/help/help.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { UpgradeComponent } from './components/upgrade/upgrade.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { preload: false }
  },
  {
    path: 'indices',
    component: IndicesComponent,
    data: { preload: false }
  },
  {
    path: 'indices/:index',
    component: IndexComponent,
    data: { preload: false }
  },
  {
    path: 'query',
    component: QueryComponent,
    data: { preload: false }
  },
  {
    path: 'tools',
    component: ToolsComponent,
    data: { preload: false }
  },
  {
    path: 'help',
    component: HelpComponent,
    data: { preload: false }
  },
  {
    path: 'notifications',
    component: NotificationsComponent,
    data: { preload: false }
  },
  {
    path: 'upgrade',
    component: UpgradeComponent,
    data: { preload: false }
  },
  {
    path: 'preloading',
    component: PreloadingComponent,
    data: { preload: false }
  },
  {/* 默认路由 */
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    data: { preload: false }
  },
  {/* 匹配不到路由时跳转的页面 404 */
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingStrategyServiceService })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() { }
}

