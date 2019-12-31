window.addEventListener('load',()=> {
    //zmienne
    let long;
    let lat;

    //zminene ktore przechowuje elementy HTML'a ktore bede aktulizował w JS
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let temperatureTimezone = document.querySelector(".location-timezone");
    


    //dlugos i szerokosc geograficzna londynu
    lat = 51.509865;
    long = -0.118092;
    //proxy boniewaz bez tego blokuje komunikacje
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    //uzywam darmowe api darksky, zawiera ono informacje na temat pogody 
    const api = `${proxy}https://api.darksky.net/forecast/58086e31aa91ec07a016d530813dddc7/${lat},${long}`;

    //pobieranie danych z serwera
        fetch(api)
            .then(response=>{
                return response.json();
            })
            .then(data =>{

                //pobieram potrzebne mi dane i inicjalizuje w html'u
                const {temperature, summary, icon} = data.currently;
                temperatureDegree.textContent = Math.floor((temperature-32) / 1.8) +' °C';
                temperatureDescription.textContent = summary;
                temperatureTimezone.textContent = data.timezone; 
                
                //wywoluje funkcje ktora ustawia ikonę dla danej pogogdy
                setIcons(icon, document.querySelector(".icon"));
            });


function setIcons(icon,iconID){

    //obiekt Skycons jest to gotowy skrypt ktory uzywam do wyswietlania ikon pogody
    const skycons = new Skycons({color: "white"});

    //zamiana ikony
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    //właczam animacje ikony
    skycons.play();
    //ustawiam ikone
    return skycons.set(iconID,Skycons[currentIcon]);


}

});


