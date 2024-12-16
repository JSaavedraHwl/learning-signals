import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisComponent } from './pages/cris/cris.component';
import { JorgeComponent } from './pages/jorge/jorge.component';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent }, 
  { path: 'cris', component: CrisComponent },
  { path: 'jorge', component: JorgeComponent },
  { path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
