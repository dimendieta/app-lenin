import { Component, OnInit } from '@angular/core';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-mecanico',
  templateUrl: './mecanico.component.html',
  styleUrls: ['./mecanico.component.scss'],
})
export class MecanicoComponent implements OnInit {

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
