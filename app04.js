//Definicion de variables globlales 
let pacientes=[];
let turnos=[];
let desc=0;
let sal=true;
const tarifa=2000;

//Creacion de funcion contructora de cartera de profesionales

function opcion (nombre,matricula, especializacion ,orientacion, contacto) {
    this.nombre=nombre;
    this.matricula=matricula;
    this.especializacion = especializacion;
    this.orientacion=orientacion;
    this.contacto=contacto;
}

//Creacion de Objetos de cartera de prof

const opcion1 = new opcion ("Maria" , "1972837" , "Niños","Psicoalista","+543863410343")
const opcion2 = new opcion ("Marta" , "1892734" , "Adultos","Cognitivo Conductual","+543865410743")
const opcion3 = new opcion ("Micaela" , "1902384" , "Parejas","Gestaltico","+543873410643")
const opcion4 = new opcion ("Marcos" , "289033" , "Familia","Sistemica","+543863410343")
const opcion5 = new opcion ("Victor" , "1972837" , "Niños","Psicoalista","+543863410343")
const opcion6 = new opcion ("German" , "1892734" , "Adultos","Cognitivo Conductual","+543865410743")
const opcion7 = new opcion ("Celina" , "5802484" , "Parejas","Gestaltico","+543873410643")
const opcion8 = new opcion ("Candela" , "4589033" , "Familia","Sistemica","+543863410343")

// Creacion de clases

class Turno{
    constructor(fecha,hora){
        this.fecha=fecha;
        this.hora=hora;
    }   
}


class Paciente {
    constructor(nombre,apellido,edad,correo){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.correo=correo;
    }
}

class Datos{
    constructor(total,numSesiones){
        this.total=total;
        this.numSesiones;
    }
}

// Creacion de funciones

//funcion nuevoPacient para ser agregado en el array paciente como objeto mediante funcio agregarPaciente

function nuevoPaciente(){
    let nuevoPaciente=[];
    let nombre="";
    let apellido="";
    let edad=0;
    let correo="";

    nombre=prompt("Ingrese su nombre");
    apellido=prompt("Ingrese su apellido");
    edad=Number(prompt("Ingrese su edad"));
    correo=("Ingrese su correo electronico");

    nuevoPaciente=new Paciente(nombre,apellido,edad,correo);
    return nuevoPaciente;
}

function agregarPaciente() {
    return pacientes.push(nuevoPaciente());
}



//funcion Asignacion turno para ser agregado en el array turnos como objeto mediante funcion agregarTurno
function asignacionTurno(){
    nuevoTurno=[];
    let fecha=0;
    let hora=0;
fecha=Number(prompt("Ingrese fecha del turno utilizando 2 digitos para el dia , 2 digitos para el mes y 4 digitos para el año \n \t Recuerde que los horarios de atencion son de lunes a viernes."));
hora=Number(prompt("Ingrese hora del turno utilizando numeros enteros,recuerde que los horarios de atencion son de 9 a 17 hs "));

nuevoTurno=new Turno(fecha,hora);

return nuevoTurno;
}
// Funcion agregar Turno
function agregarTurno() {
    return turnos.push(asignacionTurno());
}

// funcion para calcular el monto total de la sesion y ser agregada como objeto el total de la sesion y num sesion en el array pacientes, mediante funcion agregarDatos
function calcular(sesion) {
    let total=0;

    if(sesion==1){
        total=tarifa;
        alert("usted debera abonar"+" "+ tarifa);
        return total;
    }
    else (sesion>=2 && sesion<=5)
        total=tarifa*sesion*0.80;         
        alert("usted debera abonar"+" "+ total);
        return total;
}


// funcion para calcular el monto total 
function pago(){
    let sesion=0;
    let nuevoDatos=[];

    alert(pacientes.map(post=>post.nombre)+" para finalizar sera necesario abonar la sesion");

    do{
        
        sesion=Number(prompt("La sesion tiene un costo de "+tarifa+", "+" CreaTerapia tiene ofertas especiales abonando mas de dos sesiones en un solo pago hasta un limite de 5 \n\t\ 1- Abonando una sesion no tiene descuento \n\t\ 2- Abonando dos o mas sesiones obtienes un 20 % de Descuento \n\t\ Ingrese el numero correspondiente a las sesiones que sea abonar"));

  
        if(sesion==1){
            calcular(sesion);
            break;
        }
        else if(sesion==2){
            calcular(sesion);
            break;
        }
        else if(sesion==3){
            calcular(sesion);
            break;
        }
        else if(sesion==4){
            calcular(sesion);
            break;
        }
        else if(sesion==5){
            calcular(sesion);
            break;
        }
        else{
            alert("Ingrese nuevamente, el valor ingresado no corresponde");
        }
    

    }

    while(sesion < 1 || sesion > 5)

    
    nuevoDatos=new Datos(calcular(sesion),sesion);
    console.log(nuevoDatos);
    return nuevoDatos;

}
// Funcion agregar Datos
function agregarPago() {
    return pacientes.push(pago());
}


//

alert("Bienvenidos a Createrapia")

agregarPaciente();
console.log(pacientes);

do{

tipoTerapia =Number(prompt( "¿"+ pacientes.map(post => post.nombre) +" "+ "que tipo Terapia estas buscando?: \n\t\ (Ingresa el numero correspondiente )\n\t\ 1-Niños \n\t\ 2- Adultos \n\t\ 3- Parejas \n\t\ 4-Familia"))


    let selectProfesional=0;

    if(tipoTerapia==1){
        selectProfesional=Number(prompt("Genial"+" "+pacientes.map(post=>post.nombre)+" "+"A continuacion detallamos los profesiones disponibles en consultorio "+ " "+ opcion1.especializacion +":"+"\n\t\ (Ingrese el numero correspondiente del profesional que desea agendar un turno)"+ "\n\t\ 1 - Lic "+opcion1.nombre+","+"MP "+opcion1.matricula + " "+opcion1.orientacion + "\n\t\ 2 - Lic "+ opcion5.nombre+","+"MP"+opcion5.matricula+" "+opcion5.orientacion));
        agregarTurno();
        console.log(turnos);
        agregarPago();
    }
    else if(tipoTerapia==2){
        selectProfesional=Number(prompt("Genial"+" "+pacientes.map(post=>post.nombre)+" "+"A continuacion detallamos los profesiones disponibles en consultorio "+ " "+ opcion1.especializacion +":"+"\n\t\ (Ingrese el numero correspondiente del profesional que desea agendar un turno)"+ "\n\t\ 1 - Lic "+opcion1.nombre+","+"MP "+opcion1.matricula + " "+opcion1.orientacion + "\n\t\ 2 - Lic "+ opcion5.nombre+","+"MP"+opcion5.matricula+" "+opcion5.orientacion));
        agregarTurno();
        console.log(turnos);
        agregarPago();
    }
    else if(tipoTerapia==3){
        selectProfesional=Number(prompt("Genial"+" "+pacientes.map(post=>post.nombre)+" "+"A continuacion detallamos los profesiones disponibles en consultorio "+ " "+ opcion1.especializacion +":"+"\n\t\ (Ingrese el numero correspondiente del profesional que desea agendar un turno)"+ "\n\t\ 1 - Lic "+opcion1.nombre+","+"MP "+opcion1.matricula + " "+opcion1.orientacion + "\n\t\ 2 - Lic "+ opcion5.nombre+","+"MP"+opcion5.matricula+" "+opcion5.orientacion));
        agregarTurno();
        console.log(turnos);
        agregarPago();       
    }
    else if(tipoTerapia==4){
        selectProfesional=Number(prompt("Genial"+" "+pacientes.map(post=>post.nombre)+" "+"A continuacion detallamos los profesiones disponibles en consultorio "+ " "+ opcion1.especializacion +":"+"\n\t\ (Ingrese el numero correspondiente del profesional que desea agendar un turno)"+ "\n\t\ 1 - Lic "+opcion1.nombre+","+"MP "+opcion1.matricula + " "+opcion1.orientacion + "\n\t\ 2 - Lic "+ opcion5.nombre+","+"MP"+opcion5.matricula+" "+opcion5.orientacion));
        agregarTurno();
        console.log(turnos);
        agregarPago();   
    }
    else{
        alert("Debe ingresar un numero!")
    }
}

while(tipoTerapia < 1 || tipoTerapia > 4);

alert(pacientes.map(post=>post.nombre)+" tu turno fue asignado para el dia "+turnos.map(post=>post.fecha)+" a las "+turnos.map(post=>post.hora)+" Hs,"+" el costo de la sesion es de "+pacientes.map(post=>post.total)+" Pesos."+"En tu casilla de mail recibiras un correo con la confirmacion del turno , Muchas Gracias!");

console.log(pacientes);


