import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsyncCodeComponent } from './async-code/async-code.component';
import { GridComponent } from './grid/grid.component';

const routes: Routes = [
  {
    path: '',
    component: GridComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridRoutingModule { }
