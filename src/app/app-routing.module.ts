import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeBodyComponent } from './home-body/home-body.component';
import { RoomsViewComponent } from './rooms-view/rooms-view.component';


const routes: Routes = [
  {
    path: ':type',
    pathMatch: 'full',
    component: RoomsViewComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeBodyComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
