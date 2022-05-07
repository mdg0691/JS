//Definicion de Variables

let turno,paciente,sesion,desc=0,i;
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

paciente=prompt("Bienvenidos a Createrapia , ingresa tu nombre para empezar")

tipoTerapia =parseInt(prompt( "¿"+ paciente +" "+ "que tipo Terapia estas buscando?: \n\t\ (Ingresa el numero correspondiente )\n\t\ 1-Niños \n\t\ 2- Adultos \n\t\ 3- Parejas \n\t\ 4-Familia"))

// Funcion de pago 
function process(){
    
    sesion=parseInt(prompt("La sesion tiene un costo de "+tarifa+", "+" CreaTerapia tiene ofertas especiales abonando mas de dos sesiones en un solo pago hasta un limite de 5 \n\t\ 1- Abonando una sesion no tiene descuento \n\t\ 2- Abonando dos o mas sesiones obtienes un 20 % de Descuento \n\t\ Ingrese el numero correspondiente a las sesiones que sea abonar"))

    function calcular(sesion) {
        if(sesion==1){
            let msj=alert("usted debera abonar"+" "+ tarifa);
            return msj
        }
        else if(sesion>=2 && sesion<=5){
            let total=tarifa*sesion*0.80;
            let msj=alert("usted debera abonar"+" "+ total);
            return msj;
        }
        else{
        return alert("Intente nuevamente , asegurese de seguir las intrucciones ")
        }
   
    }

for (i=0;i<=sesion;i++){
    if(i==1){
        calcular(sesion);
        break;
    }
    else if(i==2){
        calcular(sesion);
        break;
    }
    else if(i==3){
        calcular(sesion);
        break;
    }
    else if(i==4){
        calcular(sesion);
        break;
    }
    else if(i==5){
        calcular(sesion);
        break;
    }

}

}

//Bucle for para la seleccion del tipo de profesional que el cliente va a elegir , agendar un turno y pagar la sesion 
for(i=0 ; i<= tipoTerapia;i++){
    if(tipoTerapia==1){
        prof=parseInt(prompt("Genial"+" "+paciente+" "+"A continuacion detallamos los profesiones disponibles en consultorio "+ " "+ opcion1.especializacion +":"+"\n\t\ (Ingrese el numero correspondiente del profesional que desea agendar un turno)"+ "\n\t\ 1 - Lic "+opcion1.nombre+","+"MP "+opcion1.matricula + " "+opcion1.orientacion + "\n\t\ 2 - Lic "+ opcion5.nombre+","+"MP"+opcion5.matricula+" "+opcion5.orientacion));
        let turno = prompt ("Para finalizar ingresa fecha y mes del turno");
        alert(paciente+"para finalizar sera necesario abonar la sesion");
        process();
        break;       
    }
    else if(tipoTerapia==2){
        prof=parseInt(prompt("Genial"+" "+paciente+" "+"A continuacion detallamos los profesiones disponibles en consultorio "+ " "+ opcion2.especializacion +":"+"\n\t\ (Ingrese el numero correspondiente del profesional que desea agendar un turno)"+ "\n\t\ 1 - Lic "+opcion2.nombre+","+"MP "+opcion2.matricula + " "+opcion2.orientacion + "\n\t\ 2 - Lic "+ opcion6.nombre+","+"MP"+opcion6.matricula+" "+opcion6.orientacion)) 
        turno = prompt ("Para finalizar ingresa fecha y mes del turno")
        alert(paciente+" para finalizar sera necesario abonar la sesion")
        process();
        alert ("su turno quedo agendado para el dia "+turno+","+"en su casilla de mail recibira la confirmacion, Muchas gracias!");
        break;  
        
    }
    else if(tipoTerapia==3){
        prof=parseInt(prompt("Genial"+" "+paciente+" "+"A continuacion detallamos los profesiones disponibles en consultorio "+ " "+ opcion3.especializacion +":"+"\n\t\ (Ingrese el numero correspondiente del profesional que desea agendar un turno)"+ "\n\t\ 1 - Lic "+opcion3.nombre+","+"MP "+opcion3.matricula + " "+opcion3.orientacion + "\n\t\ 2 - Lic "+ opcion7.nombre+","+"MP"+opcion7.matricula+" "+opcion7.orientacion)) 
        turno = prompt ("Para finalizar ingresa fecha y mes del turno")
        alert(paciente+" para finalizar sera necesario abonar la sesion")
        process();
        alert ("su turno quedo agendado para el dia "+turno+","+"en su casilla de mail recibira la confirmacion, Muchas gracias!");
        break;
    }
    else if(tipoTerapia==4){
        prof=parseInt(prompt("Genial"+" "+paciente+" "+"A continuacion detallamos los profesiones disponibles en consultorio "+ " "+ opcion4.especializacion +":"+"\n\t\ (Ingrese el numero correspondiente del profesional que desea agendar un turno)"+ "\n\t\ 1 - Lic "+opcion4.nombre+","+"MP "+opcion4.matricula + " "+opcion4.orientacion + "\n\t\ 2 - Lic "+ opcion8.nombre+","+"MP"+opcion8.matricula+" "+opcion8.orientacion)) 
        turno = prompt ("Para finalizar ingresa fecha y mes del turno")
        alert(paciente+" para finalizar sera necesario abonar la sesion")
        process();
        alert ("su turno quedo agendado para el dia "+turno+","+"en su casilla de mail recibira la confirmacion, Muchas gracias!")
        break;
    }
    else{
        alert("Debe ingresar un numero!")
        break;
    }
}



