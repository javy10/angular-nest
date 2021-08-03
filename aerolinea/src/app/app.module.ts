import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
//import { ReservacionComponent } from './reservacion/reservacion.component';
import { NavbarComponent } from './reservacion/navbar/navbar.component';
import { ReservacionListComponent } from './reservacion/reservacion-list/reservacion-list.component';
import { ReservacionFormComponent } from './reservacion/reservacion-form/reservacion-form.component';

@NgModule({
  declarations: [
    AppComponent,
    
    //ReservacionComponent,
    NavbarComponent,
    ReservacionListComponent,
    ReservacionFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
