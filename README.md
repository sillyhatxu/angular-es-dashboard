# LearningAngular

创建项目
```
ng new {projectName}
```

安装依赖
```
npm install
```

启动服务
```
ng serve
```

创建组件
```
ng g component components/header
```

创建服务
```
ng g service services/storage
```

### 双向数据引用 FormsModule
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BasicComponent } from './components/basic/basic.component';
import { TwoWayDataBindingComponent } from './components/two-way-data-binding/two-way-data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasicComponent,
    TwoWayDataBindingComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## 路由切换页面

对应的组件显示到`<router-outlet></router-outlet>`标签中

```
http://localhost:4200/webpack-dev-server/page-a
http://localhost:4200/webpack-dev-server/page-b
http://localhost:4200/webpack-dev-server/page-c
```

## build

```
ng build
```

> 生成dist目录，copy到[learning-angular-container](https://github.com/sillyhatxu/learning-angular-container)