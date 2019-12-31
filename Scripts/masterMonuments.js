//wywołanie funkcji z pokazywaniem slajodw
showSlidesBigBen();
function showSlidesBigBen(){
  //zmienne do przechowywania zdjec i czas wyswietlania zdjecia
    let i=0;
    let imagesBigBen = [];
    let imagesTowerBridge = [];
    let imagesBuckinghamPalace = [];
    let imagesTowerOfLondon = [];
    let imagesCathedral = [];
    let time = 3000;

    //inicjalizacja tablic 
    imagesBigBen[0]= '../Photos/bigben1.jpg';
    imagesBigBen[1]= '../Photos/bigben2.jpg';
    imagesBigBen[2]= '../Photos/bigben3.jpg';
    imagesTowerBridge[0]= '../Photos/towerbridge1.jpg';
    imagesTowerBridge[1]= '../Photos/towerbridge2.jpg';
    imagesTowerBridge[2]= '../Photos/towerbridge3.jpg';
    imagesBuckinghamPalace[0]= '../Photos/buckinghampalace1.jpg';
    imagesBuckinghamPalace[1]= '../Photos/buckinghampalace2.jpg';
    imagesBuckinghamPalace[2]= '../Photos/buckinghampalace3.jpg';
    imagesTowerOfLondon[0]= '../Photos/towerOfLondon1.jpg';
    imagesTowerOfLondon[1]= '../Photos/towerOfLondon2.jpg';
    imagesTowerOfLondon[2]= '../Photos/towerOfLondon3.jpg';
    imagesCathedral[0]= '../Photos/cathedral1.jpg';
    imagesCathedral[1]= '../Photos/cathedral2.jpg';
    imagesCathedral[2]= '../Photos/cathedral3.jpg';
    
    //funkcja ktora zmienia zdjecie
    function changeImg(){

      //podlaczenie tablic do danych elementow w html 
    document.bigBenPhoto.src = imagesBigBen[i];
    document.towerBridgePhoto.src = imagesTowerBridge[i];  
    document.towerOfLondonPhoto.src = imagesTowerOfLondon[i];
    document.buckinghamPalacePhoto.src = imagesBuckinghamPalace[i];  
    document.cathedralPhoto.src = imagesCathedral[i];  
     
    //zeruje sie zmienna pomocnicza gdy bedzie ostatnie zdjecie wyswietlane
    if(i<imagesBigBen.length - 1){
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