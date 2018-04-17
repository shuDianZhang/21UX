import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from "@angular/forms";

// 以下导入第三方模块
import { NgZorroAntdModule } from 'ng-zorro-antd';

// 以下导入自定义模块
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgZorroAntdModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
