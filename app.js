let nombreA,nombreB,edadA,edadB, dif;

nombreA=prompt("Ingresa primer nombre ")
edadA=Number(prompt("ingrese edad de"+" "+  nombreA))

nombreB=prompt("Ingresa segundo nombre")
edadB=Number(prompt("ingrese edad de"+" "+ nombreB))


if (nombreA == "" || edadA == "" ||nombreB == "" || edadB ==""){
    alert("todos los campos deben estar completos")}

else if (edadA==edadB){
    alert(nombreA+" "+"y"+" "+nombreB+" "+"tienen la misma edad")
}

else if (edadA>edadB){
    dif=edadA-edadB;
    console.log(dif)
    alert(nombreA+" "+"es mayor que"+" "+nombreB+" "+"por"+" "+dif+" "+"años")
}
else if (edadA<edadB){
    dif=edadB-edadA;
    console.log(dif)
    alert(nombreB+" "+"es mayor que"+" "+nombreA+"por"+" "+dif+" "+"años")
}

