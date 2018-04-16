import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';

import { NgZorroAntdModule } from 'ng-zorro-antd';
@NgModule({
  imports: [
    
   NgZorroAntdModule

  ],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule { }