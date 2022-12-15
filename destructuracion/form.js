document.querySelector("#formulario").addEventListener("submit",consecuencia)
document.querySelector("#ancla").addEventListener("click",consecuencia2)


function consecuencia(e){
    e.preventDefault();
    //alert("Soy una consecuencia")
    
    //var formulario = document.querySelector("#formulario");
  
    var formulario = e.target;

    /*let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let calificacion = document.querySelector("#calificacion").value;*/

    let {nombre, apellido, calificacion} = formulario;
    console.log(nombre.value)
    /*
    let nombre_final = nombre.value;
    let apellido_final = apellido.value;
    let calificacion_final = calificacion.value;

    console.log(nombre_final + apellido_final);*/


}

function consecuencia2(e){
    e.preventDefault();
    e.target.innerHTML="Cambio el texto";
    //document.querySelector("#ancla")
    alert("click")
}