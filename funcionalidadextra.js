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
   },

autosParaLaVenta : function(auto){
   let noVendidos = this.autos
   let filtrados = noVendidos.filter (function(noVendidos){
       return (noVendidos.vendido === false)
   })

   return filtrados
}, 

    puedeComprar:function(auto,persona){
        let valorcuotasAuto= auto.precio/auto.cuotas
        return persona.capacidadDePagoEnCuotas>valorcuotasAuto && persona.capacidadDePagoTotal>auto.precio
 
     }
}



console.log(concesionaria)


