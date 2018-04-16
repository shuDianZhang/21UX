import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule,
    FormsModule
  ],
  declarations: [HeaderComponent, MenuComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
