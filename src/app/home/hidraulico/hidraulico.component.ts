import { Component, OnInit } from '@angular/core';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-hidraulico',
  templateUrl: './hidraulico.component.html',
  styleUrls: ['./hidraulico.component.scss'],
})
export class HidraulicoComponent implements OnInit {

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
