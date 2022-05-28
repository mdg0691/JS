const newPacientLS=localStorage.getItem("newPacient")
const newPacientParse=JSON.parse(newPacientLS);
const tbodyTabla = document.querySelector('.table tbody');
console.log(newPacientLS)
console.log(newPacientParse)
let padre = document.getElementById("staff");


let findSelector= () =>{
    let selector=document.querySelectorAll("input[name='names']:checked").value;
    console.log(selector5)
    return selector;
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

for (const persona of staff) {
    let li = document.createElement("div");
    li.classList.add('form-check');
    let buttonRadio = document.createElement("input");
    buttonRadio.classList.add('form-check-input');
    buttonRadio.setAttribute("type","radio");
    buttonRadio.setAttribute("name","names");
    buttonRadio.setAttribute("value",persona.nombre);
    buttonRadio.setAttribute("id","id");
    let label= document.createElement("label");
    label.classList.add('form-check-label');
    li.innerHTML=` ${persona.id} │ Lic ${persona.nombre} │  Especialidad ${persona.especializacion}  │  N°Matricula ${persona.matricula}`;
    
    padre.appendChild(li);
    li.appendChild(buttonRadio);
    buttonRadio.appendChild(label);

}

profesional=findSelector();
newPacientParse.push(profesional);
console.log(newPacientParse);

function agregar() {

    // console.log("Datos agregados");
    // dataBase.push(newPaciente);
    // console.log(dataBase);
   
    tbodyTabla.innerHTML = "";

    newPacientParse.forEach(function (registro) {
        tbodyTabla.innerHTML += `<tr><td>${registro.correo}
                                </td><td>${registro.nombre}
                                </td><td>${registro.apellido}
                                </td><td>${registro.fechaNacimiento}
                                </td><td>${registro.city}
                                </td></tr>`;
    });

}

