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

    
    let clickedItem="";
    (j.target != j.currentTarget) ? clickedItem=j.target.id : j.stopPropagation(); //Operador Ternario

    {
            console.log(clickedItem);
         if(clickedItem=="Terapia Individual"){
            arrayTerapiaIndividual=[arrayDataJson[0],arrayDataJson[1]];
            añadirProfesional(arrayTerapiaIndividual);
         }

        else if (clickedItem=="terapia de Pereja"){
            arrayTerapiaIndividual=[arrayDataJson[0],arrayDataJson[1]];
            añadirProfesional(arrayTerapiaIndividual);
        }
        else if (clickedItem=="terapia de Niños"){
            arrayTerapiaIndividual=[arrayDataJson[0],arrayDataJson[1]];
            añadirProfesional(arrayTerapiaIndividual);
        }
        else if (clickedItem=="Asesoramiento Clinico"){
            arrayTerapiaIndividual=[arrayDataJson[0],arrayDataJson[1]];
            añadirProfesional(arrayTerapiaIndividual);
        }
        else if (clickedItem=="Orientacion a Padres"){
            arrayTerapiaIndividual=[arrayDataJson[0],arrayDataJson[1]];
            añadirProfesional(arrayTerapiaIndividual);
        }
        else if (clickedItem=="Evaluacion Psicologica"){
            arrayTerapiaIndividual=[arrayDataJson[0],arrayDataJson[1]];
            añadirProfesional(arrayTerapiaIndividual);
        }
        else if (clickedItem=="Orientacion a Padres"){
            arrayTerapiaIndividual=[arrayDataJson[0],arrayDataJson[1]];
            añadirProfesional(arrayTerapiaIndividual);
        }
        else{
            arrayTerapiaIndividual=[arrayDataJson[0],arrayDataJson[1]];
            añadirProfesional(arrayTerapiaIndividual);
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

    li.innerHTML=`Lic ${servicio}`;
    
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

let arrayDataJson=[];
let arrayTerapiaIndividual=[];
let arrayTerapiaPareja=[];
let arrayTerapiaNiños=[];
let arrayAsoramientoClinico=[];

const añadirProfesional=(x) =>{
    let buttonGroup="";
   
    arrayTerapiaIndividual.forEach(element => {
        buttonGroup="";
        buttonGroup.innerHTML = "";
        buttonGroup=document.getElementById("thirdButtonGroup");
            
        buttonGroup.innerHTML+=`<div>       
        <img style="width:150px"; src="${element.imagen}" class="rounded-circle" alt="...">
        <h1>${element.profesional}</h1>
        <h1>${element.matricula}</h1>
        <!--<p class="parrafo-index">${element.descripcion}</p>  -->
            
            </div>`
        });
}

fetch("../datos.json")
    .then(resp=>resp.json())
    .then(data=>{arrayDataJson=data;
    });
  

    / For full API documentation, including code examples,
// visit http://wix.to/94BuAAs
import {fetch} from 'wix-fetch';
 
$w.onReady(function () {
  //TODO: write your page related code here...
  https://api.emailjs.com/api/v1.0/email/send
});
 
export function button1_click(event, $w) {
  // Change all values to your own
  let params = {
      user_id: 'YOUR_PUBLIC_KEY',
      service_id: 'service_kv5u9yt',
      template_id: 'YOUR_TEMPLATE_ID',
      template_params: {
        'YOUR_PARAM1_NAME': 'YOUR_PARAM1_VALUE',
        'YOUR_PARAM2_NAME': 'YOUR_PARAM2_VALUE'
      }
  };

  let headers = {
      'Content-type': 'application/json'
  };

  let options = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(params)
  };

  fetch('https://api.emailjs.com/api/v1.0/email/send', options)
    .then((httpResponse) => {
        if (httpResponse.ok) {
            console.log('Your mail is sent!');
        } else {
            return httpResponse.text()
              .then(text => Promise.reject(text));
        }
    })
    .catch((error) => {
        console.log('Oops... ' + error);
    });
}
