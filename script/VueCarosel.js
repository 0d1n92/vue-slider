// Esercizio: provare a riprodurre uno slider di immagini, già fatto in precedenza con jQuery, questa volta con Vue, quindi non manipolando direttamente il DOM, ma i dati di Vue, come fatto stamattina insieme.
// Bonus: aggiungiamo autoplay.
var app= new Vue ({
  el:'#app',
  data:{
    images: [
      {
        imageUrl:'img/Aero-Technium_MgS-XTC_1250x1250px_V1.jpg',
        altText:"Aero-Technium",
      },
    ]
  },
});
