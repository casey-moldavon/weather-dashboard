$(document).ready(function() {


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

// ========================= Event Listener =========================

            $("#search-button").on("click", function(){
            var city = $(this).attr("#city-search");
            event.preventDefault()
    

// ========================= API Stuffff =========================

                //---------- New Key ----------
                var apiKey = "65875c478c483f7306d0ebe42d560f76";

                var currentQueryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + ",us&mode=json&APPID=" + apiKey;
    
                $.ajax({
                    url: currentQueryURL,
                    method: "GET"
                }).then(function(response){
                    console.log(response);
                    console.log(currentQueryURL);
    
                    // var lon = response.coord.lon;
                    // console.log(lon);
                    // var lat = response.coord.lat;
                    // console.log(lat);
    
                    //this section should change the current text in each display, replacing it with the given string + response

                    // $("#city-name-display").text("City: " + response.name);
                    $("#temperature-display").text("Temperature: " + response.main.temp);
                    $("#humidity-display").text("Humidity: " + response.main.humidity + " %");
                    $("#wind-display").text("Wind Speed: " + response.wind.speed + " m/hour");

                    $(".weather-icon").text(response.weather.main);


                    if (response.weather.main === "Clear") {
                        $("#weather-icon").attr(scr = "images/sunny.png");
                    };
                    if (response.weather.main === "Clouds") {
                        $("#weather-icon").attr("src", "images/partlycloudy.png");
                    };
                    if (response.weather.main === "Rain") {
                        $("#weather-icon").attr("src", "images/rain.png");
                    };
                    if (response.weather.main === "Drizzle") {
                        $("#weather-icon").attr("src", "images/sleet.png");
                    };
                    if (response.weather.main === "Snow") {
                        $("#weather-icon").attr("src", "images/snow.png");
                    };
                    if (response.weather.main === "Thunderstorm") {
                        $("#weather-icon").attr("src", "images/tstorms.png");
                    };


                });

                localStorage.setItem("city", city);

                $("#drop1").text(localStorage.getItem(city));

            });


            $("#search-button").on("click", function(){

                $("#city-container").fadeIn(2000);
                $("#five-day").toggle(3000);
                // $(".day-container").fadeIn(1000);
        
                $("#day-1").toggle(3000);
                $("#day-2").toggle(3000);
                $("#day-3").toggle(3000);
                $("#day-4").toggle(3000);
                $("#day-5").toggle(3000);
        });

// ========================= Store city search and display in dropdown =========================
          

// ========================= 5-Day Weather Forecast =========================


$("#search-button").on("click", function(){
    var city = $(this).attr("#city-search");

    var apiKey = "65875c478c483f7306d0ebe42d560f76";

    var weekQueryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + ",us&mode=json&APPID=" + apiKey;


    $.ajax({
        url: weekQueryURL,
        method: "GET"
    })
    .then(function(response){
        console.log(response);
        // list.weather.main
        console.log(response.list.weather);
        $("#day-1-temp").text("Temp: " + response.list[0].main.temp);
        $("#day-1-humid").text("Temp: " + response.list[0].main.humidity);

        $("#day-2-temp").text("Temp: " + response.list[1].main.temp);
        $("#day-2-humid").text("Temp: " + response.list[1].main.humidity);

        $("#day-3-temp").text("Temp: " + response.list[2].main.temp);
        $("#day-3-humid").text("Temp: " + response.list[2].main.humidity);

        $("#day-4-temp").text("Temp: " + response.list[3].main.temp);
        $("#day-4-humid").text("Temp: " + response.list[3].main.humidity);

        $("#day-5-temp").text("Temp: " + response.list[4].main.temp);
        $("#day-5-humid").text("Temp: " + response.list[4].main.humidity);



// ========================= Icon conditionals =========================


// ------------------------- Day 1 -------------------------
if (response.list[0].weather.main === "Clear") {
    $("#day-1-icon").attr("src", "images/sunny.png");
}
if (response.list[0].weather.main === "Clouds") {
    $("#day-1-icon").attr("src", "images/partlycloudy.png");
}
if (response.list[0].weather.main === "Rain") {
    $("#day-1-icon").attr("src", "images/rain.png");
}
if (response.list[0].weather.main === "Drizzle") {
    $("#day-1-icon").attr("src", "images/sleet.png");
}
if (response.list[0].weather.main === "Snow") {
    $("#day-1-icon").attr("src", "images/snow.png");
}
if (response.list[0].weather.main === "Thunderstorm") {
    $("#day-1-icon").attr("src", "images/tstorms.png");
}
});
});

// ------------------------- Day 2 -------------------------
// if (response.list.weather.main === "Clear") {
//     $("#day-2-icon").attr("src", images/sunny.png);
// }
// if (response.list.weather.main === "Clouds") {
//     $("#day-2-icon").attr("src", images/partlycloudy.png);
// }
// if (response.list.weather.main === "Rain") {
//     $("#day-2-icon").attr("src", images/rain.png);
// }
// if (response.list.weather.main === "Drizzle") {
//     $("#day-2-icon").attr("src", images/sleet.png);
// }
// if (response.list.weather.main === "Snow") {
//     $("#day-2-icon").attr("src", images/snow.png);
// }
// if (response.list.weather.main === "Thunderstorm") {
//     $("#day-2-icon").attr("src", images/tstorms.png);
// }

// ------------------------- Day 3 -------------------------
// if (response.list.weather.main === "Clear") {
//     $("#day-3-icon").attr("src", images/sunny.png);
// }
// if (response.list.weather.main === "Clouds") {
//     $("#day-3-icon").attr("src", images/partlycloudy.png);
// }
// if (response.list.weather.main === "Rain") {
//     $("#day-3-icon").attr("src", images/rain.png);
// }
// if (response.list.weather.main === "Drizzle") {
//     $("#day-3-icon").attr("src", images/sleet.png);
// }
// if (response.list.weather.main === "Snow") {
//     $("#day-3-icon").attr("src", images/snow.png);
// }
// if (response.list.weather.main === "Thunderstorm") {
//     $("#day-3-icon").attr("src", images/tstorms.png);
// }

// ------------------------- Day 4 -------------------------
// if (response.list.weather.main === "Clear") {
//     $("#day-4-icon").attr("src", images/sunny.png);
// }
// if (response.list.weather.main === "Clouds") {
//     $("#day-4-icon").attr("src", images/partlycloudy.png);
// }
// if (response.list.weather.main === "Rain") {
//     $("#day-4-icon").attr("src", images/rain.png);
// }
// if (response.list.weather.main === "Drizzle") {
//     $("#day-4-icon").attr("src", images/sleet.png);
// }
// if (response.list.weather.main === "Snow") {
//     $("#day-4-icon").attr("src", images/snow.png);
// }
// if (response.list.weather.main === "Thunderstorm") {
//     $("#day-4-icon").attr("src", images/tstorms.png);
// }

// ------------------------- Day 5 -------------------------
// if (response.list.weather.main === "Clear") {
//     $("#day-5-icon").attr("src", images/sunny.png);
// }
// if (response.list.weather.main === "Clouds") {
//     $("#day-5-icon").attr("src", images/partlycloudy.png);
// }
// if (response.list.weather.main === "Rain") {
//     $("#day-5-icon").attr("src", images/rain.png);
// }
// if (response.list.weather.main === "Drizzle") {
//     $("#day-5-icon").attr("src", images/sleet.png);
// }
// if (response.list.weather.main === "Snow") {
//     $("#day-5-icon").attr("src", images/snow.png);
// }
// if (response.list.weather.main === "Thunderstorm") {
//     $("#day-5-icon").attr("src", images/tstorms.png);
// }


// // ========================= UV Index =========================
//     function findUvIndex() {
//         // var uvIndex = "https://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + lat + "&lon=" + lon;
//         // http://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}
//         var uvIndex = "https://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + lat + "&lon=" + lon;

//         $.ajax({
//             url: uvIndex,
//             method: "GET"
//         }).then(function (response) {
//             console.log(response)
//             $("#uv-display").text("UV Index: " + response.value)
//         })
//     };
//     findUvIndex()        


});