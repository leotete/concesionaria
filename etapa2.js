

const autos = require("./autos");

const concesionaria = {
   /* completar */
   autos: autos,
   buscarAuto: function (patente
   ) {
       this.autos.forEach(element => {
           
           if (element.patente == patente) {
               //console.log(element,'Este es el auto');
               console.log(element);
           } else {
             console.log (null) 
   }
});
       //return null;
   }

};
let resultado= concesionaria.buscarAuto('APL123');
console.log(resultado);