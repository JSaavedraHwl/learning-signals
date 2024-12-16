import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,   
        MatToolbarModule,
        MatSidenavModule,
        MatTabsModule
  ],
  exports:[
        MatButtonModule,
        MatIconModule,
        MatDividerModule,   
        MatToolbarModule,
        MatSidenavModule,
        MatTabsModule
  ]
})
export class MaterialModule { }
