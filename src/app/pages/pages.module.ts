import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { CrisComponent } from './cris/cris.component';
import { JorgeComponent } from './jorge/jorge.component';
import { MainComponent } from './main/main.component';
import { CoreModule } from '../core/core.module';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { SignalBasicoComponent } from './cris/signals/signal-basico/signal-basico.component';
import { SignalServiceComponentComponent } from './cris/signals/signal-service-component/signal-service-component.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CrisComponent, JorgeComponent, MainComponent, SignalBasicoComponent, SignalServiceComponentComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    CoreModule,
    HighlightModule,
    HttpClientModule,
    FormsModule
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
    },
    HttpClient
  ]
})
export class PagesModule {}
