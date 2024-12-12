import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoryoComponent } from './yoryo/yoryo.component';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [YoryoComponent],
  imports: [
    CommonModule,
    MatTabsModule,
  ],
  exports: [
    YoryoComponent
    
  ],
  providers: [
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PagesModule { }
