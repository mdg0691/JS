const newPacientLS=localStorage.getItem("newPacient");
const newPacientParse=JSON.parse(newPacientLS);
const tbodyTabla = document.querySelector('.table tbody');

console.log(newPacientLS)
console.log(newPacientParse)
 

let findSelector= () =>{
    let selector=document.querySelectorAll("input[name='names']:checked").value;
    console.log(selector)
    return selector;
}

let padreButton=document.getElementById('firstButtonGroup');

padreButton.addEventListener("click",doSomething);



function doSomething(j){

    let buttonGroup=document.getElementById('secondButtonGroup');
    let clickedItem="";

    (j.target != j.currentTarget) ? clickedItem=j.target.id : j.stopPropagation();//Operador Ternario
    
    {
         
         if(clickedItem=="categoryTerapia"){
            buttonGroup.innerHTML = ""; 
            addButtonsGroup(area1,"secondButtonGroup");
         }

        else if (clickedItem=="diagnosticoTerapia"){
            buttonGroup.innerHTML = "";
            addButtonsGroup(area2,"secondButtonGroup");
        }
        else{
            buttonGroup.innerHTML = "";
            addButtonsGroup(area3,"secondButtonGroup");
        }

    }
   

}

let padreButtonServicio=document.getElementById('secondButtonGroup');

padreButtonServicio.addEventListener("click",doSomethingServicio);

function doSomethingServicio(j){

    let buttonGroup=document.getElementById('thirdButtonGroup');
    let clickedItem="";
    (j.target != j.currentTarget) ? clickedItem=j.target.id : j.stopPropagation(); //Operador Ternario

    {
            console.log(clickedItem);
         if(clickedItem=="Terapia Individual"){
            buttonGroup.innerHTML = ""; 
            addButtonsGroup(staff[0].nombre ,"thirdButtonGroup");
         }

        else if (clickedItem=="terapia de Pereja"){
            buttonGroup.innerHTML = "";
            addButtonsGroup(staff[1].nombre,"thirdButtonGroup");
        }
        else if (clickedItem=="terapia de Niños"){
            buttonGroup.innerHTML = "";
            addButtonsGroup(staff[2].nombre,"thirdButtonGroup");
        }
        else if (clickedItem=="Asesoramiento Clinico"){
            buttonGroup.innerHTML = "";
            addButtonsGroup(staff[3].nombre,"thirdButtonGroup");
        }
        else if (clickedItem=="Orientacion a Padres"){
            buttonGroup.innerHTML = "";
            addButtonsGroup(staff[4].nombre,"thirdButtonGroup");
        }
        else if (clickedItem=="Evaluacion Psicologica"){
            buttonGroup.innerHTML = "";
            addButtonsGroup(staff[5].nombre,"thirdButtonGroup");
        }
        else if (clickedItem=="Orientacion a Padres"){
            buttonGroup.innerHTML = "";
            addButtonsGroup(staff[6].nombre,"thirdButtonGroup");
        }
        else{
            buttonGroup.innerHTML = "";
            addButtonsGroup(staff[7].nombre,"thirdButtonGroup");
        }

    }
    j.stopPropagation();

    return clickedItem;
}

const addButtonsGroup=(x,y) =>{
    let buttonGroup="";
    buttonGroup=document.getElementById(y);
    console.log(buttonGroup);
    for (let servicio of x) {
    let li = document.createElement("button");
    // li.classList.add('tipoServicio ');
    li.setAttribute("class", "btn btn-primary btn-lg rounded-pill");
    li.setAttribute("type","button");
    li.setAttribute("id",servicio);

    li.innerHTML=servicio;
    
    buttonGroup.appendChild(li);
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
const miembro1 = new Staff ("1","Maria" , "1972837" ,"Niños","Psicoalista","+543863410343");
const miembro2 = new Staff ("2","Marta" , "1892734" ,"Adultos","Cognitivo Conductual","+543865410743");
const miembro3 = new Staff ("3","Micaela" , "1902384" ,"Parejas","Gestaltico","+543873410643");
const miembro4 = new Staff ("4","Marcos" , "289033" ,"Familia","Sistemica","+543863410343");
const miembro5 = new Staff ("5","Victor" , "1972837" ,"Niños","Psicoalista","+543863410343");
const miembro6 = new Staff ("6","German" , "1892734" ,"Adultos","Cognitivo Conductual","+543865410743");
const miembro7 = new Staff ("7","Celina" , "5802484" ,"Parejas","Gestaltico","+543873410643");
const miembro8 = new Staff ("8","Candela" , "4589033" ,"Familia","Sistemica","+543863410343");
// vector stuff
let staff=[miembro1,miembro2,miembro3,miembro4,miembro5,miembro6,miembro7,miembro8];
//Desestructuracion de Objetos

const spreadStaff= [...staff];
const spreadMiembros=[...spreadStaff];


// const desestructurar=(staff) =>{
    
//     const {miembro1}=Staff;

// }




//Creacion de array de Servicios
const area1=["Terapia Individual","terapia de Pereja","terapia de Niños"];
const area2=["Asesoramiento Clinico","Orientacion a Padres"];
const area3=["Evaluacion Psicologica","Psicodiagnostico"];



const areas=[area1,area2,area3];


const guardar=() =>{
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
}



// for (const persona of staff) {
//     let li = document.createElement("div");
//     li.classList.add('form-check');
//     let buttonRadio = document.createElement("input");
//     buttonRadio.classList.add('form-check-input');
//     buttonRadio.setAttribute("type","radio");
//     buttonRadio.setAttribute("name","names");
//     buttonRadio.setAttribute("value",persona.nombre);
//     buttonRadio.setAttribute("id","id");
//     let label= document.createElement("label");
//     label.classList.add('form-check-label');
//     li.innerHTML=` ${persona.id} │ Lic ${persona.nombre} │  Especialidad ${persona.especializacion}  │  N°Matricula ${persona.matricula}`;
    
//     padre.appendChild(li);
//     li.appendChild(buttonRadio);
//     buttonRadio.appendChild(label);

// }

// profesional=findSelector();
// newPacientParse.push(profesional);
// console.log(newPacientParse);

// function agregar() {

//     // console.log("Datos agregados");
//     // dataBase.push(newPaciente);
//     // console.log(dataBase);
   
//     tbodyTabla.innerHTML = "";

//     newPacientParse.forEach(function (registro) {
//         tbodyTabla.innerHTML += `<tr><td>${registro.correo}
//                                 </td><td>${registro.nombre}
//                                 </td><td>${registro.apellido}
//                                 </td><td>${registro.fechaNacimiento}
//                                 </td><td>${registro.city}
//                                 </td></tr>`;
//     });

// }
// function doSomething(j){

//     let buttonGroup=document.getElementById('secondButtonGroup');
//     let clickedItem="";

//     if(j.target != j.currentTarget)
//     {
//          clickedItem=j.target.id;

         
//          if(clickedItem=="categoryTerapia"){
//             buttonGroup.innerHTML = ""; 
//             addButtonsGroup(area1,"secondButtonGroup");
//          }

//         else if (clickedItem=="diagnosticoTerapia"){
//             buttonGroup.innerHTML = "";
//             addButtonsGroup(area2,"secondButtonGroup");
//         }
//         else{
//             buttonGroup.innerHTML = "";
//             addButtonsGroup(area3,"secondButtonGroup");
//         }

//     }
//     j.stopPropagation();

// }


