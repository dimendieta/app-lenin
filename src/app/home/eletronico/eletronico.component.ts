import { Component, OnInit } from '@angular/core';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-eletronico',
  templateUrl: './eletronico.component.html',
  styleUrls: ['./eletronico.component.scss'],
})
export class EletronicoComponent implements OnInit {

  tiempo={
    minutos:0,
    segundos:0,
  }
  constructor(
    public timerService:TimerService
  ) {
    setTimeout(()=>{
      this.tiempo=this.timerService.tiempo;
     },1000)
   }

  ngOnInit() {}

}
