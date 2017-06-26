import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component Routes
import { CircleComponent } from './circle/circle.component';

const routes: Routes = [
  {
    path: '',
    component: CircleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
