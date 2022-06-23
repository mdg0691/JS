let popup=document.getElementById("popup");
let closebtn=document.getElementById("closebtn");
let singupbtn=document.getElementById("signUpBtn");

singupbtn.onclick=function(){
    popup.style.display="block";   
}
closebtn.onclick=function(){
    popup.style.display="block";   
}
window.onclick=function(event){
    if(event.target==popup){
        popup.style.display="none";
    }
}