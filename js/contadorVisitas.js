
mas = document.getElementById("mas"); 
mas.addEventListener("click", ()=>{
    vistas = document.getElementById("vistas").innerHTML; 
    vistas = parseInt(vistas); 
    vistas += 1; 
    document.getElementById("vistas").innerHTML = vistas; 
});


menos = document.getElementById("menos"); 
menos.addEventListener("click", ()=>{
    vistas = document.getElementById("vistas").innerHTML; 
    vistas = parseInt(vistas); 
    vistas -= 1; 
    if(vistas >= 0){
        document.getElementById("vistas").innerHTML = vistas; 
    }
});

