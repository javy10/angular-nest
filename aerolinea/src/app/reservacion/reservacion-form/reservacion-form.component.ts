import { Component, OnInit } from '@angular/core';
import { Reservacion } from 'src/app/interfaces/Reservacion';
import { ReservacionService } from 'src/app/services/reservacion.service';

@Component({
  selector: 'app-reservacion-form',
  templateUrl: './reservacion-form.component.html',
  styleUrls: ['./reservacion-form.component.css'],
  providers: [ReservacionService]
})
export class ReservacionFormComponent implements OnInit {
  reservacion: Reservacion = {
    cliente_id : '',
    vuelo_id: '',
    clase: '',
    aciento: '',
    precio: 0,
    descuento: 0,
    preciodes: 0,

  };

  constructor(private reservacionService: ReservacionService) { }

  ngOnInit(): void {
    
  }
  submitReservacion(){
    this.reservacionService.createReservacion(this.reservacion)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
