import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,   
        MatToolbarModule,
        MatSidenavModule,
        MatTabsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
  ],
  exports:[
        MatButtonModule,
        MatIconModule,
        MatDividerModule,   
        MatToolbarModule,
        MatSidenavModule,
        MatTabsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule
  ]
})
export class MaterialModule { }
