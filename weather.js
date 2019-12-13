$(document).ready(function(){


    // main body of the page:
    // list city name and current date
    // followed by:
    // - temperature
    // - humidity
    // - wind speed
    // - UV index (with color changing based on how high; green, yellow, red, etc...)
    
    // there must also be a 5 day forcast (might change to 7 day, listing the entire week)
    // each will be a small container listing:
    // - date
    // - weather icon (displaying sunny, cloudy, etc...)
    // - temperature
    // - humidity

    var dayOne = document.getElementById("day-1");
    var dayTwo = document.getElementById("day-2");
    var dayThree = document.getElementById("day-3");
    var dayFour = document.getElementById("day-4");
    var dayFive = document.getElementById("day-5");
    

        // var button = document.querySelector("#search-button");
        // button.addEventListener("click", function(){

// ========================= Event Listener =========================

            $("#search-button").on("click", function(){
            var city = $(this).attr("#city-search");
            event.preventDefault()
    

// ========================= API Stuffff =========================

                //---------- Default ----------
                // var apiKey = "ba40a3431591fcdcadbc808453fbbe64";
                //---------- New Key ----------
                var apiKey = "65875c478c483f7306d0ebe42d560f76";

                // Tai's api key
                // var apiKey = "4b8af4f937d691aa5fb93b6dd29ba04d"

                //Oren's api key
                // var apiKey = "31f4dd752a3e8b29f840df4abf0996cc";


                var currentQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey;
                // var currentQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "json&APPID=" + apiKey;        
                // var currentQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "json&APPID=" + apiKey;
                // var currentQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "json&appid=" + apiKey;
                // var currentQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=" + apiKey;
                // var currentQueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial" + "&appid=" + apiKey;
                // var currentQueryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "us&mode=json&APPID=31f4dd752a3e8b29f840df4abf0996cc";
    
                $.ajax({
                    url: currentQueryURL,
                    method: "GET"
                }).then(function(response){
                    console.log(response);
                    console.log(queryURL);
    
                    var lon = response.coord.lon;
                    console.log(lon);
                    var lat = response.coord.lat;
                    console.log(lat);
    
                    //this section should change the current text in each display, replacing it with the given string + response
                    $("#temperature-display").text = ("Temperature: " + response.main.temp);
                    $("#humidity-display").text = ("Humidity: " + response.main.humidity + " %");
                    $("#wind-display").text = ("Wind Speed: " + response.wind.speed + "m/hour");
                });
            });


// ========================= 5-Day Weather Forecast =========================

    // var weekQueryURL = "api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial" + "&appid=" + apiKey;\

    // $.ajax({
    //     url: weekQueryURL,
    //     method: "GET"
    // })
    // .then(function(response){

    //     $list.weather.main
    //     console.log(response.list.weather)
    //     list.weather.main
    //     list.main.temp
    //     list.main.humidity





// // ========================= UV Index =========================
//         function findUvIndex() {
//             // var uvIndex = "https://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + lat + "&lon=" + lon;
//             // http://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}
//             var uvIndex = "https://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + lat + "&lon=" + lon;

//             $.ajax({
//                 url: uvIndex,
//                 method: "GET"
//             }).then(function (response) {
//                 console.log(response)
//                 $("#uv-display").text("UV Index: " + response.value)
//             })
//         };
//         findUvIndex()        


});