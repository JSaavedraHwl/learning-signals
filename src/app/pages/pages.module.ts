import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { CrisComponent } from './cris/cris.component';
import { JorgeComponent } from './jorge/jorge.component';
import { MainComponent } from './main/main.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [CrisComponent, JorgeComponent, MainComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    CoreModule
  ],
  exports: [
    CrisComponent,
    JorgeComponent,
    MainComponent
  ]
})
export class PagesModule {}
