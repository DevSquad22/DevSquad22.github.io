$(document).ready(function(){

    // JQuery navbar lateral

        $('.menusito-boton').click(function(){
            $('.barra-lateral').addClass('activo');
            $('.menusito-boton').css("visibility", "hidden");
        });

        $('.boton-cerrar').click(function(){
            $('.barra-lateral').removeClass('activo');
            $('.menusito-boton').css("visibility", "visible");
        });
    });