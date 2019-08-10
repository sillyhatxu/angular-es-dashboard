import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';/* PreloadAllModules 预加载策略 */
import { HomeComponent } from './components/home/home.component'
import { CustomPreloadingStrategyServiceService } from './services/custom-preloading-strategy-service.service';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
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

