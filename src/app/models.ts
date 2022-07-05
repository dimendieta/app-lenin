
export interface  MaquinaI{
  
        marca: string,
        modelo: string,
        seccion: string,
        codigo: string,
    
      
}


export interface UserInfoI {
    correo:string;
    password:string;
    nombre:string;
    telefono:string;
    uid:string;
}

export interface ResponseApiSumaI {
    respuesta: number,
    numeroMayor: number,
    numeroMenor: number,
    estado: string;

}

export interface RequestApiSumaI {
    numero1: number;
    numero2: number;
}  