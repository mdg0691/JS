const dataBase=[];

let newPaciente=[];
let padre = document.getElementById("staff");
let inputcorreo = document.querySelector('input[type="email"]'),
    inputNombre = document.getElementById("name"),
    inputApellido = document.getElementById("surname"),
    inputFechaNacimiento=document.querySelector('input[type="date"]'),
    inputCiudad=document.getElementById("city"),
    radioBotons=document.querySelectorAll("input[name='names']");

let findSelector2= () =>{
    let selector2=document.querySelectorAll('.custom-control-input');
    let txt="";
    //let viaContacto=[];
    for (i = 0; i < selector2.length; i++) {
      if (selector2[i].checked) {
        txt =txt+" "+selector2[i].value ;
      }
    }
    return txt;
}


class Paciente {
    constructor(correo,nombre,apellido,fechaNacimiento,city,viaContacto){
        this.correo=correo;
        this.nombre=nombre;
        this.apellido=apellido;
        this.fechaNacimiento=fechaNacimiento;
        this.city=city;
        this.viaContacto=viaContacto
    }
}

obtToJSON=JSON.stringify(dataBase)
localStorage.setItem('NewPacient',obtToJSON)

//funcion crar paciente
const nuevoPaciente=() =>{
    let newVariable="";
    let correo="";
    let nombre="";
    let apellido="";
    let fechaNacimiento=new Date();
    let city="";
    //let profesional="";
    let viaContacto="";

    correo=inputcorreo.value;
    nombre=inputNombre.value;
    apellido=inputApellido.value;
    fechaNacimiento=inputFechaNacimiento.value;
    city=inputCiudad.value;
    //profesional=findSelector();
    viaContacto=findSelector2();
    console.log(viaContacto);
    newPaciente=new Paciente(correo,nombre,apellido,fechaNacimiento,city,viaContacto);
    console.log(newPaciente);
    dataBase.push(newPaciente);

    newVariable=JSON.stringify(dataBase);

    localStorage.setItem('newPacient',newVariable)
    
    //agregar(nuevoPaciente);
    //return dataBase;
}



// obtToJSON=JSON.stringify(dataBase)
// localStorage.setItem('NewPacient',obtToJSON)

console.log("Datos agregados");
console.log(obtToJSON);