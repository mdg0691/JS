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
    let buttonServicio="";
    buttonGroup=document.getElementById(y);
    console.log(buttonGroup);
    buttonGroup.innerHTML+=`
    <div class="btn-group" id="secondButtonGroup" role="group" aria-label="Basic radio toggle button group">
        <label for="" class="col-md-2 col-form-label "><h3>Servicio</h3></label>
        <div class="buttonServicios">
        </div>
     </div> 
    
    `;
    buttonServicio=document.querySelector(`.buttonServicios`);
    for (let servicio of x) {
    buttonServicio.innerHTML+=`
      <button class="btn btn-primary btn-lg rounded-pill" type="button" id=${servicio}>${servicio}</button>
    `;
}
}
//Creacion de array de Servicios
const area1=["Terapia Individual","terapia de Pereja","terapia de Niños"];
const area2=["Asesoramiento Clinico","Orientacion a Padres"];
const area3=["Evaluacion Psicologica","Psicodiagnostico"];


let arrayDataJson=[];
let arrayTerapiaIndividual=[];
let arrayTerapiaPareja=[];
let arrayTerapiaNiños=[];
let arrayAsoramientoClinico=[];


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
let buttonGroup="";
const añadirProfesional=() =>{
    buttonGroup=document.getElementById("thirdButtonGroup");
    buttonGroup.innerHTML ="";  // limpio pantalla
    renderThirdButton();
    renderProfesional();
}
const cleaveFunctionDelay =()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(cleaveFunction());
        },3000);
    });
}
const renderThirdButton=() =>{
    arrayTerapiaIndividual.forEach(e=> {
        buttonGroup.innerHTML+=`
        <div class="caja" style="text-align=center;">       
            <img style="width:200px"; height="200" src="${e.imagen}" class="rounded-circle" alt="...">
            <!-- <p>${e.matricula}</p> -->
            </br>
            </br>
            <button class="btn btn-primary btn-lg rounded-pill" type="button" id="btn${e.id}"> <p>${e.profesional}</p> </button>
            <div class="parrafo"></div>    
            </br>
            </br>
        </div>`
        });
}
const renderProfesional=() =>{
    arrayTerapiaIndividual.forEach(e => {       
        document.querySelector(`#btn${e.id}`).addEventListener("click",()=>{
            buttonGroup.innerHTML ="";
            buttonGroup.innerHTML=buttonGroup.innerHTML=`
            <div class="caja" style="text-align=center;">       
               <img style="width:200px"; height="200" src="${e.imagen}" class="rounded-circle" alt="...">
               <p>${e.profesional}
               <p>${e.descripcion}
               </br>
               </br>
               <div class="parrafo"></div>    
               <div class="row mb-3">
               <label id="birthGroup" for="dob" class="col-sm-3 col-form-label text-sm-right">Seleccione la fecha</label>
                   <div class="col">
                       <input id="birth" name="dob" type="date" class="col-6 form-control" aria-describedby="dob-feedback">
                        <div id="dob-feedback" class="invalid-feedback">
                        </div>
                   </div>
               </div>
               </br>
               </br>
            </div>`
        });
    });
}


fetch("../datos.json").then(resp=>resp.json()).then(data=>{arrayDataJson=data;});
  
  const cleaveFunction=() =>{
    new Cleave('.input-element', {
        creditCard: true,
        delimiter: '-',
        onCreditCardTypeChanged: function (type) {
            console.log(type)
            if(type === 'visa'){
                document.querySelector('.fa-cc-visa').classList.add('active');
            } else {
                document.querySelector('.fa-cc-visa').classList.remove('active');
            }
        }
    });
   }
    
// agregado 23/06
   let popup=document.getElementById("popup");
   let closebtn=document.getElementById("closebtn");
   let singupbtn=document.getElementById("signUpBtn");
   
   singupbtn.onclick=function(){
       popup.style.display="block";
       cleaveFunctionDelay();
   
   }
   closebtn.onclick=function(){
       popup.style.display="none";   
   }
   window.onclick=function(event){
       if(event.target==popup){
           popup.style.display="none";
       }
   }v