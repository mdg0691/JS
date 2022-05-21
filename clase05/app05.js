const dataBase=[];
let newPaciente;
let padre = document.getElementById("staff");
let inputNombre = document.getElementById("nombre"),
    inputApellido = document.getElementById("apellido"),
    inputEdad = document.getElementById("edad"),
    inputCorreo=document.getElementById("correo"),
    radioBotons=document.querySelectorAll("input[name='names']"),
    inputGuardar=document.getElementById("boton");
const tbodyTabla = document.querySelector('.table tbody');


let findSelector= () =>{
    let selector=document.querySelector("input[name='names']:checked").value;
    return selector;
}



class Paciente {
    constructor(nombre,apellido,edad,correo,profesional){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.correo=correo;
        this.profesional=profesional;

    }
}
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
let staff=[miembro1,miembro2,miembro3,miembro4,miembro5,miembro6,miembro7,miembro8];

//funcion crar paciente
const nuevoPaciente=() =>{
    //let newPaciente=[];
    let nombre="";
    let apellido="";
    let edad=0;
    let correo="";
    let profesional="";

    nombre=inputNombre.value;
    apellido=inputApellido.value;
    edad=inputEdad.value;
    correo=inputCorreo.value;
    profesional=findSelector();
    console.log(profesional);
    newPaciente=new Paciente(nombre,apellido,edad,correo,profesional);
    console.log(newPaciente);
    agregar()
    //agregar(nuevoPaciente);
    //return newPaciente;
}

dataBase.push("newPaciente");

// const agregarPaciente=() => {
//     return baseDatos.push(nuevoPaciente());
// }
function agregar() {

    console.log("Datos agregados");
    dataBase.push(newPaciente);
    console.log(dataBase);
   
    tbodyTabla.innerHTML = "";

    dataBase.forEach(function (registro) {
        tbodyTabla.innerHTML += `<tr><td>${registro.nombre}
                                </td><td>${registro.apellido}
                                </td><td>${registro.edad}
                                </td><td>${registro.correo}
                                </td><td>${registro.profesional}
                                </td></tr>`;
    });

}
for (const persona of staff) {
    let li = document.createElement("li");
    let buttonRadio = document.createElement("input");
    buttonRadio.setAttribute("type","radio");
    buttonRadio.setAttribute("name","names");
    buttonRadio.setAttribute("value",persona.nombre);
    buttonRadio.setAttribute("id","id");

    li.innerHTML=` ${persona.id} │ Lic ${persona.nombre} │  Especialidad ${persona.especializacion}  │  N°Matricula ${persona.matricula}`;
    
    padre.appendChild(buttonRadio);
    padre.appendChild(li);

}

console.log(dataBase);