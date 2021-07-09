import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservacionComponent } from './reservacion/reservacion.component';
import { NavbarComponent } from './reservacion/navbar/navbar.component';
import { ReservacionListComponent } from './reservacion/reservacion-list/reservacion-list.component';
import { ReservacionFormComponent } from './reservacion/reservacion-form/reservacion-form.component';
import { ClientesFormComponent } from './clientes/clientes-form/clientes-form.component';
import { ClientesListComponent } from './clientes/clientes-list/clientes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservacionComponent,
    NavbarComponent,
    ReservacionListComponent,
    ReservacionFormComponent,
    ClientesFormComponent,
    ClientesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
