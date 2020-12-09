// Esercizio: provare a riprodurre uno slider di immagini, già fatto in precedenza con jQuery, questa volta con Vue, quindi non manipolando direttamente il DOM, ma i dati di Vue, come fatto stamattina insieme.
// Bonus: aggiungiamo autoplay.
var app= new Vue ({
  el:'#app',
  data:{
    imageIndex:0,
    images: [
      {
        imageUrl:'img/Aero-Technium_MgS-XTC_1250x1250px_V1.jpg',
        altText:"Aero-Technium",
      },
      {
        imageUrl:'img/Fliegen_XD_1250x1250px_V1.jpg',
        altText:"Fligen",
      },
      {
        imageUrl:'img/StellaFJ_1250x1250px_V1.jpg',
        altText:"Stella",
      },
      {
        imageUrl:'img/Surfleader_CI4_1250x1250px_V1.png',
        altText:"SurfLeader",
      },
    ],
  },
    methods: {
      prevImg: function() {
        this.imageIndex--;
        if (this.imageIndex==-1) {
          this.imageIndex= this.images.length-1;

        }
      },
      nextImg: function() {
        this.imageIndex++;
          console.log(this.imageIndex);
        if (this.imageIndex==this.images.length-1) {
          this.imageIndex= 0;


        }
      },
  },
});
