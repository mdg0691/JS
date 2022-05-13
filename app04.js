//Definicion de variables globlales 
let pacientes=[];
let turnos=[];
let staff=[];
let datos=[];
let desc=0;
let sal=true;
const tarifa=2000;

//// Creacion de clases

class Staff {
    constructor(id,nombre,matricula,especializacion,orientacion,contacto){
        this.id=id;
        this.nombre=nombre;
        this.matricula=matricula;
        this.especializacion = especializacion;
        this.orientacion=orientacion;
        this.contacto=contacto;
    }
}

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
//Creacion de Objetos de cartera de prof 
const miembro1 = new Staff (1,"Maria" , "1972837" ,"Niños","Psicoalista","+543863410343");
const miembro2 = new Staff (2,"Marta" , "1892734" ,"Adultos","Cognitivo Conductual","+543865410743");
const miembro3 = new Staff (3,"Micaela" , "1902384" ,"Parejas","Gestaltico","+543873410643");
const miembro4 = new Staff (4,"Marcos" , "289033" ,"Familia","Sistemica","+543863410343");
const miembro5 = new Staff (5,"Victor" , "1972837" ,"Niños","Psicoalista","+543863410343");
const miembro6 = new Staff (6,"German" , "1892734" ,"Adultos","Cognitivo Conductual","+543865410743");
const miembro7 = new Staff (7,"Celina" , "5802484" ,"Parejas","Gestaltico","+543873410643");
const miembro8 = new Staff (8,"Candela" , "4589033" ,"Familia","Sistemica","+543863410343");
// vector stuff
staff=[miembro1,miembro2,miembro3,miembro4,miembro5,miembro6,miembro7,miembro8];

// Creacion de funciones

//funcion nuevoPacient para ser agregado en el array paciente como objeto mediante funcio agregarPaciente

const nuevoPaciente=() =>{
    let nuevoPaciente=[];
    let nombre="";
    let apellido="";
    let edad=0;
    let correo="";

    nombre=prompt("Ingrese su nombre");
    apellido=prompt("Ingrese su apellido");
    edad=Number(prompt("Ingrese su edad"));
    correo=prompt("Ingrese su correo electronico");

    nuevoPaciente=new Paciente(nombre,apellido,edad,correo);
    return nuevoPaciente;
}

const agregarPaciente=() => {
    return pacientes.push(nuevoPaciente());
}



//funcion Asignacion turno para ser agregado en el array turnos como objeto mediante funcion agregarTurno
const asignacionTurno=() => {
    nuevoTurno=[];
    let fecha=0;
    let hora=0;
fecha=Number(prompt("Ingrese fecha del turno utilizando 2 digitos para el dia , 2 digitos para el mes y 4 digitos para el año \n \t Recuerde que los horarios de atencion son de lunes a viernes."));
hora=Number(prompt("Ingrese hora del turno utilizando numeros enteros,recuerde que los horarios de atencion son de 9 a 17 hs "));

nuevoTurno=new Turno(fecha,hora);

return nuevoTurno;
}
// Funcion agregar Turno
const agregarTurno=() => {
    return turnos.push(asignacionTurno());
}

// funcion para calcular el monto total de la sesion y ser agregada como objeto el total de la sesion y num sesion en el array pacientes, mediante funcion agregarDatos
const calcular=(sesion)=>{
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
const pago=() =>{
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
const agregarPago=() => {
    return pacientes.push(pago());
}

const mostrarStuff=() =>{
    texto="";
    staff.forEach((element) => {
        texto += `${element.id}) Lic. ${element.nombre} , ${element.especializacion} , ${element.orientacion} , Matricula ${element.matricula}\n`;
      });

    let seleccion=prompt(`Esta es la lista de prof , cual desea elegir: \n ${texto}`);
return seleccion;
}
//

alert("Bienvenidos a Createrapia")
agregarPaciente();
mostrarStuff();
agregarTurno();
agregarPago();
alert(pacientes.map(post=>post.nombre)+" tu turno fue asignado para el dia "+turnos.map(post=>post.fecha)+" a las "+turnos.map(post=>post.hora)+" Hs,"+" el costo de la sesion es de "+pacientes.map(post=>post.total)+" Pesos."+"En tu casilla de mail recibiras un correo con la confirmacion del turno , Muchas Gracias!");

console.log(pacientes);