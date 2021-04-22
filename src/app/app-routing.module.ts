import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'form',
    loadChildren: () =>
      import('./dynamic-form/dynamic-form.module').then(
        (m) => m.DynamicFormModule
      ),
  },
  {
    path: 'post',
    loadChildren: () => import('./blog/blog.module').then((m) => m.BlogModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
