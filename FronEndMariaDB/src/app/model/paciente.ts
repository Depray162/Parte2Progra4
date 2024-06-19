export class Paciente{
    constructor(public id:number,public cedula:string,public nombre:string,public edad:number,
        public direccion:string, public telefono:string,public email:string,
        public contrasena:string
    ){}
}