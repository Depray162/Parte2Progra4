export class Paciente{
    constructor(public idPaciente:number,public cedula:string,public nombre:string,public edad:number,
        public direccion:string, public telefono:string,public email:string,
        public contrasena:string
    ){}
}