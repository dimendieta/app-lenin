import { Component, OnInit } from '@angular/core';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-neumatico',
  templateUrl: './neumatico.component.html',
  styleUrls: ['./neumatico.component.scss'],
})
export class NeumaticoComponent implements OnInit {

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
