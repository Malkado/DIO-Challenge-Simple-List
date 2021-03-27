import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () => import('../app/core/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'users',
    loadChildren: () => import('../app/core/user-list/user.module').then(m => m.UserModule)
  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
