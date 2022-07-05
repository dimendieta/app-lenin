import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticationService } from 'src/app/services/autentication.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  correo: string;
  password:string;

  constructor(   private  autenticationService: AutenticationService,
    private router:Router) { 
 


  }

  ngOnInit() {}

  openMenu() {
    console.log('estoy en open menu');
  }
  async login() {
    const respuesta =  await this.autenticationService.login(this.correo,this.password);
    console.log('esta es la respuesta ->', respuesta);
    if (respuesta) {
        this.router.navigate(['/home'])
   }
   
 }
}
