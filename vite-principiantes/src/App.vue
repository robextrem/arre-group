<template>
  <div>
    <h1>Hola {{ planeta }} cruel!</h1>
    <p>Hecho por {{ nombre }}</p>
    <input type="text" v-model="nombre"/>
    <button v-on:click="saludar">Saludando</button>
  </div>
</template>
<script>
  export default {
      methods: {
        cambiarNombre: function(){
          this.nombre = "Sergio Tello";
        },
        saludar: function(){
          alert(`Hola ${this.nombre}`);
        }
      },
      data: function(){
        return {
          nombre:"Angy",
          planeta:"Marte"
        }
      },
      beforeMount: function(){
        //this.cambiarNombre();
        console.log("Se esta inicializando");
      },
      mounted: function(){
        console.log("Se inicializo");
      }
  }
</script>
