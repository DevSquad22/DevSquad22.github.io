function validar(){
    inputName = document.getElementById("inputName").value; 
    inputMail = document.getElementById("floatingInput").value; 
    inputComment = document.getElementById("floatingTextarea").value; 

    response = document.getElementById("liveAlertPlaceholder"); 
    response.innerText = ""; 
    myText = "";
    errors = 0; 

    if(inputName.length < 2){
        myText += "*Nombre incorrecto\n";
        errors++; 
    }
    if(inputMail.length < 7){
        myText += "*Correo incorrecto\n"
        errors++; 
    } 
    if(inputComment.length < 2){
        myText += "*Comentario incorrecto\n"
        errors++;
    } 
    if(errors === 0){
        mainButton.type = "submit"; 
    }
    response.innerText = myText; 
}

var mainButton = document.getElementById("miSubmit"); 
mainButton.addEventListener("click", ()=>{
    validar(); 
}); 

myForm = document.getElementById("mainContactForm"); 
myForm.addEventListener("submit", ()=>{
    alert("Gracias por compartir!"); 
});

