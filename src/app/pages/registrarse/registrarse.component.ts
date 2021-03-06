import { Component, OnInit } from '@angular/core';
import { UserInfoI } from 'src/app/models';
import { AutenticationService } from 'src/app/services/autentication.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss'],
})
export class RegistrarseComponent implements OnInit {


  newUser: UserInfoI = {
    correo:null,
    password:null,
    nombre:null,
    telefono:null,
    uid:null,
  };

  repassword: string= null;


  constructor(
    private autenticationService:AutenticationService,
              private firestoreService: FirestoreService
  ) { }

  ngOnInit() {}

  async registrarse() {
    if (this.newUser.password != this.repassword) {
      console.log('passwords no coinciden');  
      return;
    }
    const res = await  this.autenticationService.registrarUser(this.newUser);
    console.log('res -> ',res);
    if (res) {
      
       const path = 'Usuarios';
       const id =  res.user.uid;
       this.newUser.uid = id;
       this.firestoreService.saveDoc(path, id,this.newUser)
       // guardar en la base de datos
    }
  
 }
}

