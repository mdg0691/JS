//Variables
//Craacion de variables para obtencion de datos de pagina java scrip 01
const newPacientLS=localStorage.getItem("newPacient");
const newPacientParse=JSON.parse(newPacientLS);
//variables obetenidas del grupo de botones del DOM
const padreButton=document.getElementById('firstButtonGroup');
const padreButtonServicio=document.getElementById('secondButtonGroup');

// Grupo de botones de formulario de pago
let popup=document.getElementById("popup");
let closebtn=document.getElementById("closebtn");
let agendarCita=document.getElementById("agendarCita");


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

console.log(newPacientLS)
console.log(newPacientParse)
//Creacion de clase asignacion de turno
class Turno{
    constructor(fecha,hora,profesional){
        this.fecha=fecha;
        this.hora=hora;
        this.profesional=profesional;
    }
}
//Funciones
//Funcion crear turnos
let nuevaCita=[];
const nuevoTurno=()=>{
    let fecha=new Date();
    let hora="";
    let profesional="";

    fecha=document.querySelector('input[type="date"]').value;
    hora=document.getElementById("hora").value;
    profesional=document.getElementById("profesional").textContent;
    
    nuevaCita=new Turno(fecha,hora,profesional)
    console.log(nuevaCita);
}
//Funcion  para encrontra el boton seleccionado del grupo area
let findSelector= () =>{let selector=document.querySelectorAll("input[name='names']:checked").value}
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
padreButtonServicio.addEventListener("click",doSomethingServicio);
function doSomethingServicio(j){
    let clickedItem="";
    (j.target != j.currentTarget) ? clickedItem=j.target.id : j.stopPropagation(); //Operador Ternario
    {
         if(clickedItem=="Terapia Individual"){
            añadirProfesional(arrayTerapiaIndividual);
         }
        else if (clickedItem=="terapia de Pereja"){
            console.log(clickedItem)
            añadirProfesional(arrayTerapiaPareja);
        }
        else if (clickedItem=="terapia de Niños"){
            añadirProfesional(arrayTerapiaNiños);
        }
        else if (clickedItem=="Asesoramiento Clinico"){
            añadirProfesional(arrayTerapiaNiños);
        }
        else if (clickedItem=="Orientacion a Padres"){
            añadirProfesional(arrayTerapiaIndividual);
        }
        else if (clickedItem=="Evaluacion Psicologica"){
            añadirProfesional(arrayTerapiaIndividual);
        }
        else if (clickedItem=="Orientacion a Padres"){
            añadirProfesional(arrayTerapiaIndividual);
        }
        else{añadirProfesional(arrayTerapiaIndividual);
        }
    }
    j.stopPropagation();
    return clickedItem;
}
//Añadir botones de servicio
const addButtonsGroup=(x,y) =>{
    let buttonGroup=document.getElementById(y);
    let buttonServicio="";
    
    console.log(buttonGroup);
    buttonGroup.innerHTML+=`
    <div class="btn-group" id="secondButtonGroup" role="group" aria-label="Basic radio toggle button group">
        <div class="categories">
            <h3>Servicios</h3>     
        </div>   
        <div class="buttonServicios">
        </div>
     </div> 
    `;
    buttonServicio=document.querySelector(`.buttonServicios`);
    for (let servicio of x) {
    buttonServicio.innerHTML+=`
      <button class="btn btn-primary" type="button" id="${servicio}">${servicio}</button>
    `;}
}
const renderThirdButton=(element) =>{
    document.getElementById("hideTitle").style.display="block";
    element.forEach(e=> {
        buttonGroup.innerHTML+=`
        <div class="caja" style="text-align=center;">       
            <img style="width:200px"; height="200" src="${e.imagen}" class="rounded-circle" alt="...">
            <!-- <p>${e.matricula}</p> -->
            </br>
            </br>
            <div class="parrafo">
                <button class="btn btn-primary" type="button" id="btn${e.id}"> <p>${e.profesional}</p> </button>
            </div>    
            </br>
            </br>
        </div>`
        })
}
//Funcion para renderizar profesionales
const renderProfesional=(element) =>{
    element.forEach(e => {       
        document.querySelector(`#btn${e.id}`).addEventListener("click",()=>{
            document.getElementById("hideTitle").style.display="none";
            buttonGroup.innerHTML ="";
            buttonGroup.innerHTML=buttonGroup.innerHTML=`
            <div class="col-md-6 parrafo caja" style="text-align=center;">       
                <div class="">   
                    <img style="width:200px"; height="200" src="${e.imagen}" class="rounded-circle" alt="...">
                    <p id="profesional" name=${e.profesional}>${e.profesional}
                    <p>${e.descripcion}
                    </br>
                    </br>
               </div>    
               <h4>Seleccione dia y horario</h4>
               <div class="row mb-3">
               <label id="dateGroup" for="dob" class="col-sm-3 col-form-label text-sm-right">Seleccione la fecha</label>
                   <div class="col">
                       <input id="birth" name="dob" type="date" class="col-6 form-control" aria-describedby="dob-feedback">
                        <div id="dob-feedback" class="invalid-feedback">
                        </div>
                   </div>
               </div>
               <div class="row mb-3">
                <label  class="col-sm-3 col-form-label text-sm-right" for="cars">Hora</label>
                    <div class="col">
                        <select name="hora" id="hora">
                            <option value="9:00">9:00</option>
                            <option value="10:00">10:00</option>
                            <option value="11:00">11:00</option>
                            <option value="12:00">12:00</option>
                        </select>
                    </div>           
               </div>
               <h4>Tarifa por sesion : 1800 $ </h4>
            </div>`;
            agendarCitaActive(false);
        });  
    });
}
//Funcion Tarjeta de pago
const cleaveFunctionDelay =()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(cleaveFunction());
        },3000);
    });
}
//Funcion para envio de mail con biblioteca email.js
const sendMail=(params)=>{
    let tempParam={
        from_name: "CreaTerapia Equipo",
        to_name:newPacientParse[0].nombre,
        profesional_name: document.getElementById("profesional").textContent,
        fecha:document.querySelector('input[type="date"]').value,
        hora:document.getElementById("hora").value
    }
    emailjs.send('service_ymlkscq','template_vj18vmp',tempParam)
    .then(function(res){
        console.log("sucess",res.status);
    })
   }
//Funcion para llamar a renderizar lista de servicios y renderizar profesionales    
const añadirProfesional=(element) =>{
    buttonGroup=document.getElementById("thirdButtonGroup");
    buttonGroup.innerHTML =``;  // limpio pantalla
    renderThirdButton(element);
    renderProfesional(element);
}
//Funcion popups biblioteca swalFire
const swalFire=()=>{
    return new Promise((resolve,reject)=>{
        resolve(Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Su pago fue realizado con exito,en su casilla de mail recibira la confirmacion de la cita',
            showConfirmButton: false,
            timer: 3000
          }));
    });
}
//Funcion para cerrar popup de tarjeta de pago
const closePopup=()=>{
        document.getElementById("popup").style.display="none";
}
// Funcion de evento al pagar el servicio, enviando mail mediante emailJS y luego cartel de pago realizado con exito con swalFire
const guardar=()=>{
    sendMail();
    swalFire();
    setTimeout(closePopup,5000);
}


// fetch("../datos.json").then(resp=>resp.json()).then(data=>{arrayDataJson=data;});
const getBB = async () => {
    const res = await fetch("../datos.json")
    const data = await res.json();
    arrayDataJson=data;
    //filtro de profesionales por rama de servicio
    console.log(arrayDataJson);
    arrayTerapiaIndividual=arrayDataJson.filter(e => e.servicio == "Terapia individual");
    console.log(arrayTerapiaIndividual);
    arrayTerapiaPareja=arrayDataJson.filter(e => e.servicio =="Terapia parejas");
    console.log(arrayTerapiaPareja);
    arrayTerapiaNiños=arrayDataJson.filter(e => e.servicio =="Terapia niños");
    console.log(arrayTerapiaNiños);
}
//Funcion para diseño tarjeta de pago   
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
    

   
   //Funcion para activar/desactivar boton de pago
   const agendarCitaActive=(e) =>{
    if(e==true){
        agendarCita.disabled=true;
       }
       else{
        agendarCita.disabled=false;
       }
   }
  //llamada a funcion para desactivar h3 de seleccion de profesionales  
   agendarCitaActive(true);
    
   agendarCita.onclick=function(){
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
   }

   getBB();