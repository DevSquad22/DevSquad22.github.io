$(document).ready(function(){

    // JQuery navbar lateral

        $('.menusito-botonExt').click(function(){
            $('.barra-lateral').addClass('activo');
            $('.menusito-botonExt').css("visibility", "hidden");
        });

        $('.boton-cerrarExt').click(function(){
            $('.barra-lateral').removeClass('activo');
            $('.menusito-botonExt').css("visibility", "visible");
        });
    });