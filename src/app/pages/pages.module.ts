import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CrisComponent } from './cris/cris.component';
import { JorgeComponent } from './jorge/jorge.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [ CrisComponent, JorgeComponent, MainComponent],
  imports: [
    CommonModule,
    MatTabsModule,
     BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
  ],
  exports: [
    
    
  ],

})
export class PagesModule { }
