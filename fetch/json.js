let sergio = {
    nombre: "Sergio",
    edad: 24,
    hermanos:[
        "Alan",
        "Marcela"
    ],
    activo: true
};

let alumnos = [{
    nombre: "Sergio",
    edad: 24,
    hermanos:[
        "Alan",
        "Marcela"
    ],
    activo: true
},
{
    nombre: "Yurian",
    edad: 18,
    hermanos:[
    ],
    activo: true
},
{
    nombre: "Angy",
    edad: 19,
    hermanos:[
        "Pipo",
        "Toño",
        "Pepe"
    ],
    activo: false
}]

for(n in alumnos){
    console.log(alumnos[n].nombre);
}