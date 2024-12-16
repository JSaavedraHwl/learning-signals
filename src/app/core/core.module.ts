import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { ExampleComponentComponent } from './example-component/example-component.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    ExampleComponentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule, 
    RouterModule,
  ],
  exports:[
    ToolbarComponent,
    ExampleComponentComponent
  ]
})
export class CoreModule { }
