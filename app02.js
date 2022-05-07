let nombre,sesion,i;
const tarifa=2000;
nombre=prompt("Bienvenidos a Createrapia , ingresa tu nombre para empezar")

sesion =Number(prompt( nombre +" "+ "Ingresa el numero de sesiones que deseas realizar. Recuerda que no pueden ser mayores a 5"))

function total(){
    totalsesion=sesion*tarifa;
        console.log("Usted debe abonar"+" "+total+" "+"pesos")
        alert("Usted debe abonar"+" "+total+" "+"pesos")
        return totalsesion;
}
for(i=0 ; i<= sesion;i++){
    if(sesion==1){
        total=sesion*tarifa;
        console.log("Usted debe abonar"+" "+total+" "+"pesos")
        alert("Usted debe abonar"+" "+total+" "+"pesos")
        break;
        
    }
    else if(sesion==2){
        total=sesion*tarifa;
        console.log("Usted debe abonar"+" "+total+" "+"pesos")
        alert("Usted debe abonar"+" "+total+" "+"pesos")
        break;
        
    }
    else if(sesion==3){
        total=sesion*tarifa;
        console.log("Usted debe abonar"+" "+total+" "+"pesos")
        alert("Usted debe abonar"+" "+total+" "+"pesos")
        break;
    }
    else if(sesion==4){
        total=sesion*tarifa;
        console.log("Usted debe abonar"+" "+total+" "+"pesos")
        alert("Usted debe abonar"+" "+total+" "+"pesos")
        break;
    }
    else if(sesion==5){
        total=sesion*tarifa;
        console.log("Usted debe abonar"+" "+total+" "+"pesos")
        alert("Usted debe abonar"+" "+total+" "+"pesos")
        break;
    }
    else{
        console.log("No se aceptan mas de 5 sesiones")
        alert("No se aceptan mas de 5 sesiones")
        break;
    }

    
}