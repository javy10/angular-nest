import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservacionListComponent } from './reservacion/reservacion-list/reservacion-list.component';
//import { ReservacionListComponent } from './reservacion/reservacion-list/reservacion-list.component'; 

const routes: Routes = [

  {
    path: 'reservacion',
    component: ReservacionListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
