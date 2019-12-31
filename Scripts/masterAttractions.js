//wywołanie funkcji z pokazywaniem slajodw
showSlidesBigBen();
function showSlidesBigBen(){

  //zmienne do przechowywania zdjec i czas wyswietlania zdjecia
    let i=0;
    let imagesTrafalgarSquare = [];
    let imagesLondonEye = [];
    let imagesHydePark = [];
    let imagesMadameTussauds = [];
    let imagesWembley = [];
    let time = 3000;

    //inicjalizacja tablic
    imagesTrafalgarSquare[0]= '../Photos/trafalgarsquare1.jpg';
    imagesTrafalgarSquare[1]= '../Photos/trafalgarsquare2.jpg';
    imagesTrafalgarSquare[2]= '../Photos/trafalgarsquare3.jpg';
    imagesLondonEye[0]= '../Photos/londoneye1.jpg';
    imagesLondonEye[1]= '../Photos/londoneye2.jpg';
    imagesLondonEye[2]= '../Photos/londoneye3.jpg';
    imagesHydePark[0]= '../Photos/hydepark1.jpg';
    imagesHydePark[1]= '../Photos/hydepark2.jpg';
    imagesHydePark[2]= '../Photos/hydepark3.jpg';
    imagesMadameTussauds[0]= '../Photos/madametussaud1.jpg';
    imagesMadameTussauds[1]= '../Photos/madametussaud2.jpg';
    imagesMadameTussauds[2]= '../Photos/madametussaud3.jpg';
    imagesWembley[0]= '../Photos/wembley1.jpg';
    imagesWembley[1]= '../Photos/wembley2.jpg';
    imagesWembley[2]= '../Photos/wembley3.jpg';
    

    //funkcja ktora zmienia zdjecie
    function changeImg(){

      //podlaczenie tablic do danych elementow w html 
    document.trafalgarSquarePhoto.src = imagesTrafalgarSquare[i];
    document.londonEyePhoto.src = imagesLondonEye[i];  
    document.hydeParkPhoto.src = imagesHydePark[i];
    document.madameTussaudsPhoto.src = imagesMadameTussauds[i];  
    document.wembleyPhoto.src = imagesWembley[i];  
     
    

      
      //zeruje sie zmienna pomocnicza gdy bedzie ostatnie zdjecie wyswietlane
    if(i<imagesTrafalgarSquare.length - 1){
      i++;
    }else{
      i=0;
    }


    //przerwa o time sekund
    setTimeout(() => {
      changeImg();
  },time);

    
  }
  //otwierane gdy wczytuje sie okno
  window.onload = changeImg;

}