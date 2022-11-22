let i=14;
let resultado="";

switch(i){
    case 0:{
        resultado="El valor es 0";
        break;
    }
    case 1:{
        resultado="El valor es 1";
        break;
    }
    case 2:
    case 3:
    case 4:{
        resultado="El valor es mayor a 2";
        break;
    }
    case 14:{
        resultado="El valor es mayor a 14";
    }
    default:{
        resultado="El valor es mayor a 1";
    }
}

console.log(resultado);