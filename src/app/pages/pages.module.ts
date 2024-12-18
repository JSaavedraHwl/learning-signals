import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { CrisComponent } from './cris/cris.component';
import { JorgeComponent } from './jorge/jorge.component';
import { MainComponent } from './main/main.component';
import { CoreModule } from '../core/core.module';
import { SignalsComponent } from './cris/signals/signals.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

@NgModule({
  declarations: [CrisComponent, JorgeComponent, MainComponent, SignalsComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    CoreModule,
    HighlightModule
  ],
  exports: [
    CrisComponent,
    JorgeComponent,
    MainComponent
  ],
  providers:[
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ]
})
export class PagesModule {}
