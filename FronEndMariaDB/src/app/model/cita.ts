export class Cita{
    constructor(public idCita:number,public motivo:string,public area:string,public fechaSolicitud:string,public fechaCita:string,public horaCita:string,
        public idPaciente:number, public idMedico:number
    ){}
}