const autos = require("./autos");

const concesionaria = {
   autos: autos,
   buscarAuto : function(patente){
      for(let i = 0; i < this.autos.length; i++){
         if (autos[i].patente === patente){
            return  autos[i]
         }
         
      }
      return null
   },
   venderAuto: function(patente){
    {
        let resultado = this.buscarAuto(patente);
         if (resultado != null){
         resultado.vendido = true
         return resultado
        } else {
            return resultado
        }
    }
   }
}


console.log (concesionaria.venderAuto("APL123"))