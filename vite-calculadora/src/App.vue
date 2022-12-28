<template>
  <div id="calculadora">
    <label>Numero 1</label>&nbsp;
    <input type="number" v-model="num1"/><br/>
    <label>Numero 2</label>&nbsp;
    <input type="number" v-model="num2"/><br/><br/>
    <button v-on:click="sumar">Calcular suma</button>
    <hr/>
    Resultado {{ num1 }} + {{ num2 }} = <span>{{ resultado }}</span>
  </div>
</template>
<script>
 export default {
    methods: {
      sumar: function(){
        this.resultado = this.num1 + this.num2;
      }
    },
    data: function(){
      return {
        num1:0,
        num2:0,
        resultado:0
      }
    }
 }
</script>