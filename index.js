function Hora(){
    document.getElementById("hora").innerHTML=Date();
}

/*
function CambioColor(){
    if(document.getElementById("hombre") == hombre){
        document.body.style.backgroundColor = "red";
    }
    else if(document.getElementById("mujer") == mujer){
        document.body.style.backgroundColor = "blue";
    }
}
*/

document.addEventListener("DOMContentLoaded", function(){
    var hombre = document.getElementById("hombre");
    var mujer = document.getElementById("mujer");

    hombre.addEventListener("click", function(){
        CambioColor("hombre");
    });

    mujer.addEventListener("click", function(){
        CambioColor("mujer");
    });

    function CambioColor(genero){
        if (genero == "hombre"){
            document.body.style.backgroundColor="red";
        }
        else if(genero == "mujer"){
            document.body.style.backgroundColor="blue";
        }
    }


});

document.addEventListener("DOMContentLoaded",function(){
    var waza = document.getElementById("waza");
    var awanta = document.getElementById("awanta");

    waza.addEventListener("click", function(){
        SCambioColor("waza");
    });

    awanta.addEventListener("click", function(){
        SCambioColor("awanta");
    });

    function SCambioColor (genero){
        if(genero == "waza"){
            document.body.style.backgroundColor = "yellow";
        }
        else if(genero == "awanta"){
            document.body.style.backgroundColor = "green";
        }
    }

});

document.addEventListener("DOMContentLoaded", function(){

    var waza = document.getElementById("waza");
    var awanta = document.getElementById("awanta");
    const imagen = document.getElementById("loca1");

    waza.addEventListener("click", function(){
        CambioImagen("primero");
    });

    awanta.addEventListener("click", function(){
        CambioImagen("segundo");
    });

    function CambioImagen(opcion){
        if (opcion == "primero"){
            imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfGaGwnUbgx3TF1WOQojOBsusfOK3mOUNfyNnUmEN3UIyDVG0A0XIBUQZPdhqEqARwuJY&usqp=CAU";
        }
        else if(opcion == "segundo"){
            imagen.src = "https://www.dexerto.es/cdn-image/wp-content/uploads/sites/3/2024/03/11/genshin-impact-arlecchino-1.jpg?width=3840&quality=60&format=auto";
        }
    }

});

/*
window.onload = function () {
    function cambiarColorFondo() {
        document.body.style.backgroundColor = 'blue';
    }

    function cambiarLogo() {
        const ulimaLogo = document.querySelector('.row-sd ulima img');
        ulimaLogo.src = 'https://static.wixstatic.com/media/31f81d_060cc59250b94d7190e69ded65941601~mv2.jpg/v1/fill/w_720,h_576,al_c,q_85/31f81d_060cc59250b94d7190e69ded65941601~mv2.jpg'; // Cambiar la URL de la imagen por la nueva
    }

    const enlaces = document.querySelectorAll('a');
    enlaces.forEach(function(enlace) {
        enlace.addEventListener('click', cambiarColorFondo);
    });

    const lugarSelect = document.getElementById('lugar');
    lugarSelect.addEventListener('change', cambiarLogo);

    const btn1 = document.getElementById("boton1");
    btn1.addEventListener("click", myFunction);

    function myFunction() {
        document.getElementById("demo").innerHTML = "Paragraph changed."
        window.alert("Window alert");
        console.log("Console log");
    }
}
*/


document.addEventListener("DOMContentLoaded", function(){

    const boton = document.getElementById("boton");
    boton.addEventListener("click", CambioTexto);

    function CambioTexto(){
        document.getElementById("texto").innerHTML = "Cambio";
        window.alert("waza");
        console.log("Un saludito para tu mama tmb");
    }

});

document.addEventListener("DOMContentLoaded", function(){

    var uno = document.getElementById("1");
    var dos = document.getElementById("2");
    var tres = document.getElementById("3");
    var cuatro = document.getElementById("4");

    uno.addEventListener("click",function(){
        CColor("uno");
    });

    dos.addEventListener("click", function(){
        CColor("dos");
    });

    tres.addEventListener("click", function(){
        CColor("tres");
    });

    cuatro.addEventListener("click", function(){
        CColor("cuatro");
    });

    function CColor(numero){
        if(numero == "uno"){
            document.body.style.backgroundColor = "blue";
        }
        else if(numero == "dos"){
            document.body.style.backgroundColor = "brown";
        }
        else if(numero == "tres"){
            document.body.style.backgroundColor = "orange";
        }
        else{
            document.body.style.backgroundColor = "silver";
        }
    }

});

document.addEventListener("DOMContentLoaded", function(){

    
    //var val = document.getElementById("val");
    //var fol = document.getElementById("fol");
    var selector = document.getElementById("selector");
    var formulario = document.getElementById("formulario");

    selector.addEventListener("change", function(){
        CNombre(selector.value);
    });

    function CNombre(juego){
        document.body.style.backgroundColor = (juego == "val") ? "blue" :
        (juego == "fol") ? "red" : "white";

        formulario.innerHTML = (juego == "val") ? "FORMULARIO DE VAL" : 
        (juego == "fol") ? "FORMULARIO DE FOL" : "Formulario";
        
    } 

});

function letra(x) {
    document.getElementById(x).style.backgroundColor = (x == "fname") ? "purple": (x == "lname") ? "red": "white";
}

function Presiono(){
    alert("Haz presionado una tecla");
}

function Carga(){
    alert("La pagina a cargado con exito");
}

var x=0;
function Scroll(){
    //var x=0;
    document.getElementById("scroll").innerHTML = x+=1;
}