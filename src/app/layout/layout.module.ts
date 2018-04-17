import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { LayoutComponent } from './layout/layout.component';

import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module'
import { HomeModule } from '../home/home.module';
import { LayoutRoutingModule } from './layout-routing.modules'


@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    HeaderModule,
    FooterModule,
    HomeModule,
    LayoutRoutingModule
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule { }