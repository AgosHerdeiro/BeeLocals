$(document).ready(function () {
    $('.carousel').carousel({
        padding: 125,
    });
});

$(document).ready(function () {
    var estilo1 = $('#detalle1').css('zIndex');
    if (estilo1 == 0) {
        $('.det1').show();
        $('#imagen1').addClass('zoom');
    } else {
        $('.det1').hide();
        $('#imagen1').removeClass('zoom');
    }
});

$('.carousel').mousemove(function () {
    var estilo1 = $('#detalle1').css('zIndex');
    if (estilo1 == 0) {
        $('.det1').show();
        $('#imagen1').addClass('zoom');
    } else {
        $('.det1').hide();
        $('#imagen1').removeClass('zoom');
    }
});

$(document).ready(function () {
    var estilo2 = $('#detalle2').css('zIndex');
    if (estilo2 == 0) {
        $('.det2').show();
        $('#imagen2').addClass('zoom');
    } else {
        $('.det2').hide();
        $('#imagen2').removeClass('zoom');
    }
});

$('.carousel').mousemove(function () {
    var estilo2 = $('#detalle2').css('zIndex');
    if (estilo2 == 0) {
        $('.det2').show();
        $('#imagen2').addClass('zoom');
    } else {
        $('.det2').hide();
        $('#imagen2').removeClass('zoom');
    }
});

$(document).ready(function () {
    var estilo3 = $('#detalle3').css('zIndex');
    if (estilo3 == 0) {
        $('.det3').show();
        $('#imagen3').addClass('zoom');
    } else {
        $('.det3').hide();
        $('#imagen3').removeClass('zoom');
    }
});

$('.carousel').mousemove(function () {
    var estilo3 = $('#detalle3').css('zIndex');
    if (estilo3 == 0) {
        $('.det3').show();
        $('#imagen3').addClass('zoom');
    } else {
        $('.det3').hide();
        $('#imagen3').removeClass('zoom');
    }
});

$(document).ready(function () {
    var estilo4 = $('#detalle4').css('zIndex');
    if (estilo4 == 0) {
        $('.det4').show();
        $('#imagen4').addClass('zoom');
    } else {
        $('.det4').hide();
        $('#imagen4').removeClass('zoom');
    }
});

$('.carousel').mousemove(function () {
    var estilo4 = $('#detalle4').css('zIndex');
    if (estilo4 == 0) {
        $('.det4').show();
        $('#imagen4').addClass('zoom');
    } else {
        $('.det4').hide();
        $('#imagen4').removeClass('zoom');
    }
});

$(document).ready(function () {
    var estilo5 = $('#detalle5').css('zIndex');
    if (estilo5 == 0) {
        $('.det5').show();
        $('#imagen5').addClass('zoom');
    } else {
        $('.det5').hide();
        $('#imagen5').removeClass('zoom');
    }
});

$('.carousel').mousemove(function () {
    var estilo5 = $('#detalle5').css('zIndex');
    if (estilo5 == 0) {
        $('.det5').show();
        $('#imagen5').addClass('zoom');
    } else {
        $('.det5').hide();
        $('#imagen5').removeClass('zoom');
    }
});

$(document).ready(function () {
    var estilos1 = $('#perfil1').css('zIndex');
    if (estilos1 == 0) {
        $('.per1').show();
        $('#imagenUno').addClass('zoom');
    } else {
        $('.per1').hide();
        $('#imagenUno').removeClass('zoom');
    }
});

$('.carousel').mousemove(function () {
    var estilos1 = $('#perfil1').css('zIndex');
    if (estilos1 == 0) {
        $('.per1').show();
        $('#imagenUno').addClass('zoom');
    } else {
        $('.per1').hide();
        $('#imagenUno').removeClass('zoom');
    }
});

$(document).ready(function () {
    var estilos2 = $('#perfil2').css('zIndex');
    if (estilos2 == 0) {
        $('.per2').show();
        $('#imagenDos').addClass('zoom');
    } else {
        $('.per2').hide();
        $('#imagenDos').removeClass('zoom');
    }
});

$('.carousel').mousemove(function () {
    var estilos2 = $('#perfil2').css('zIndex');
    if (estilos2 == 0) {
        $('.per2').show();
        $('#imagenDos').addClass('zoom');
    } else {
        $('.per2').hide();
        $('#imagenDos').removeClass('zoom');
    }
});

$(document).ready(function () {
    var estilos3 = $('#perfil3').css('zIndex');
    if (estilos3 == 0) {
        $('.per3').show();
        $('#imagenTres').addClass('zoom');
    } else {
        $('.per3').hide();
        $('#imagenTres').removeClass('zoom');
    }
});

$('.carousel').mousemove(function () {
    var estilos3 = $('#perfil3').css('zIndex');
    if (estilos3 == 0) {
        $('.per3').show();
        $('#imagenTres').addClass('zoom');
    } else {
        $('.per3').hide();
        $('#imagenTres').removeClass('zoom');
    }
});

$(document).ready(function () {
    var estilos4 = $('#perfil4').css('zIndex');
    if (estilos4 == 0) {
        $('.per4').show();
        $('#imagenCuatro').addClass('zoom');
    } else {
        $('.per4').hide();
        $('#imagenCuatro').removeClass('zoom');
    }
});

$('.carousel').mousemove(function () {
    var estilos4 = $('#perfil4').css('zIndex');
    if (estilos4 == 0) {
        $('.per4').show();
        $('#imagenCuatro').addClass('zoom');
    } else {
        $('.per4').hide();
        $('#imagenCuatro').removeClass('zoom');
    }
});

$(document).ready(function () {
    var estilos5 = $('#perfil5').css('zIndex');
    if (estilos5 == 0) {
        $('.per5').show();
        $('#imagenCinco').addClass('zoom');
    } else {
        $('.per5').hide();
        $('#imagenCinco').removeClass('zoom');
    }
});

$('.carousel').mousemove(function () {
    var estilos5 = $('#perfil5').css('zIndex');
    if (estilos5 == 0) {
        $('.per5').show();
        $('#imagenCinco').addClass('zoom');
    } else {
        $('.per5').hide();
        $('#imagenCinco').removeClass('zoom');
    }
});

$(".button-collapse").sideNav();

$('.menu-des').click(function () {
    $('.button-collapse').sideNav('show');
});

$('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: false,
}
);

$(document).ready(function () {
    $('#uno').addClass('bg-primary rounded-circle');
    $('#rese??a-3').hide();
    $('#rese??a-4').hide();
    $('#anterior').css('opacity', 'calc(0.5)');
    $('#anterior').css('cursor', 'default');
    $('#anterior').removeClass('waves-effect');
});

$('#dos').click(function () {
    $('#uno').removeClass('bg-primary rounded-circle');
    $('#dos').addClass('bg-primary rounded-circle');
    $('#rese??a-3').show();
    $('#rese??a-4').show();
    $('#anterior').css('opacity', 'calc(1)');
    $('#anterior').css('cursor', 'pointer');
    $('#anterior').addClass('waves-effect');
    $('#rese??a-1').hide();
    $('#rese??a-2').hide();
    $('#siguiente').css('opacity', 'calc(0.5)');
    $('#siguiente').css('cursor', 'default');
    $('#siguiente').removeClass('waves-effect');

});

$('#siguiente').click(function () {
    $('#uno').removeClass('bg-primary rounded-circle');
    $('#dos').addClass('bg-primary rounded-circle');
    $('#rese??a-3').show();
    $('#rese??a-4').show();
    $('#anterior').css('opacity', 'calc(1)');
    $('#anterior').css('cursor', 'pointer');
    $('#anterior').addClass('waves-effect');
    $('#rese??a-1').hide();
    $('#rese??a-2').hide();
    $('#siguiente').css('opacity', 'calc(0.5)');
    $('#siguiente').css('cursor', 'default');
    $('#siguiente').removeClass('waves-effect');

});

$('#uno').click(function () {
    $('#dos').removeClass('bg-primary rounded-circle');
    $('#uno').addClass('bg-primary rounded-circle');
    $('#rese??a-1').show();
    $('#rese??a-2').show();
    $('#anterior').css('opacity', 'calc(0.5)');
    $('#anterior').css('cursor', 'default');
    $('#anterior').removeClass('waves-effect');
    $('#rese??a-3').hide();
    $('#rese??a-4').hide();
    $('#siguiente').css('opacity', 'calc(1)');
    $('#siguiente').css('cursor', 'pointer');
    $('#siguiente').addClass('waves-effect');
});

$('#anterior').click(function () {
    $('#dos').removeClass('bg-primary rounded-circle');
    $('#uno').addClass('bg-primary rounded-circle');
    $('#rese??a-1').show();
    $('#rese??a-2').show();
    $('#siguiente').css('opacity', 'calc(1)');
    $('#siguiente').css('cursor', 'poiner');
    $('#siguiente').addClass('waves-effect');
    $('#rese??a-3').hide();
    $('#rese??a-4').hide();
    $('#anterior').css('opacity', 'calc(0.5)');
    $('#anterior').css('cursor', 'default');
    $('#anterior').removeClass('waves-effect');
});

$('#notif').click(function () {
    $('#bola').hide();
});

$("#botones1").click(function(){
    if($("#botones1").hasClass("orange")){
        $('#botones1').removeClass('orange');
        $('#botones1').addClass('grey lighten-1');
 
    }else{
        $('#botones1').removeClass('grey lighten-1');
        $('#botones1').addClass('orange');
    }
});

$("#botones2").click(function(){
    if($("#botones2").hasClass("orange")){
        $('#botones2').removeClass('orange');
        $('#botones2').addClass('grey lighten-1');
 
    }else{
    $('#botones2').removeClass('grey lighten-1');
    $('#botones2').addClass('orange');
    }
});

$("#botones3").click(function(){
    if($("#botones3").hasClass("orange")){
        $('#botones3').removeClass('orange');
        $('#botones3').addClass('grey lighten-1');
 
    }else{
    $('#botones3').removeClass('grey lighten-1');
    $('#botones3').addClass('orange');
    }
});

$("#botones4").click(function(){
    if($("#botones4").hasClass("orange")){
        $('#botones4').removeClass('orange');
        $('#botones4').addClass('grey lighten-1');
 
    }else{
    $('#botones4').removeClass('grey lighten-1');
    $('#botones4').addClass('orange');
    }
});

$("#botones5").click(function(){
    if($("#botones5").hasClass("orange")){
        $('#botones5').removeClass('orange');
        $('#botones5').addClass('grey lighten-1');
 
    }else{
    $('#botones5').removeClass('grey lighten-1');
    $('#botones5').addClass('orange');
    }
});

$("#botones6").click(function(){
    if($("#botones6").hasClass("orange")){
        $('#botones6').removeClass('orange');
        $('#botones6').addClass('grey lighten-1');
 
    }else{
    $('#botones6').removeClass('grey lighten-1');
    $('#botones6').addClass('orange');
    }
});

$("#botones7").click(function(){
    if($("#botones7").hasClass("orange")){
        $('#botones7').removeClass('orange');
        $('#botones7').addClass('grey lighten-1');
 
    }else{
    $('#botones7').removeClass('grey lighten-1');
    $('#botones7').addClass('orange');
    }
});

$("#botones8").click(function(){
    if($("#botones8").hasClass("orange")){
        $('#botones8').removeClass('orange');
        $('#botones8').addClass('grey lighten-1');
 
    }else{
    $('#botones8').removeClass('grey lighten-1');
    $('#botones8').addClass('orange');
    }
});

/*desde aca pagina buscador*/

$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false, // Close upon selecting a date,
    container: undefined // ex. 'body' will append picker to body
  });
        
  $(document).ready(function() {
    $('select').material_select();
  });

