$(document).ready(function(){
    $(".card").each(function(contador){
        $(this).delay((contador)*500).fadeTo(1000,1)
    });
});