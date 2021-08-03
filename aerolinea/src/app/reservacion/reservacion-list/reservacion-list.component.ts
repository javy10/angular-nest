import { Component, OnInit } from '@angular/core';
import { ReservacionService } from 'src/app/services/reservacion.service';

@Component({
  selector: 'app-reservacion-list',
  templateUrl: './reservacion-list.component.html',
  styleUrls: ['./reservacion-list.component.css']
})
export class ReservacionListComponent implements OnInit {

  constructor(private reservacionService: ReservacionService) { }

  ngOnInit(): void {
    this.getReservacions();
  }
  getReservacions(){
    this.reservacionService.getReservacions()
    .subscribe(
      res => console.log(res),
      err => console.log(err),
    )
  }

}
