import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component'

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {/* 默认路由 */
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {/* 匹配不到路由时跳转的页面 404 */
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
