import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservacionFormComponent } from './reservacion/reservacion-form/reservacion-form.component';
import { ReservacionListComponent } from './reservacion/reservacion-list/reservacion-list.component';
//import { ReservacionListComponent } from './reservacion/reservacion-list/reservacion-list.component'; 

const routes: Routes = [

  {
    path: '',
    component: ReservacionListComponent
  },
  {
    path: 'reservacion',
    component: ReservacionListComponent
  },
  {
    path: 'reservacion/create',
    component: ReservacionFormComponent
  },
  {
    path: 'reservacion/edit/:id',
    component: ReservacionFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
