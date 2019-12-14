// $(document).ready(function() {

    /* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    
    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                }
        }
        }
        currentDate()
    }


    function currentDate(){
    var mydate = new Date();
    var year = mydate.getFullYear();
        if(year < 1000){
            year += 1900
        }
        var day = mydate.getDay();
        var month = mydate.getMonth();
        var daym = mydate.getDate();
        var dayArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];
        var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var date = dayArray[day] + " " + daym + " " + monthArray[month] + " " + year //string display of complete date

        $("#current-date").text("Date: " + date);
        
        $("#day-1-date").text(month + "/" + "16" + "/" + year)
        $("#day-2-date").text(month + "/" + "17" + "/" + year)
        $("#day-3-date").text(month + "/" + "18" + "/" + year)
        $("#day-4-date").text(month + "/" + "19" + "/" + year)
        $("#day-5-date").text(month + "/" + "20" + "/" + year)
    };

//     var dayForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + ",us" + "&appid=" + apiKey;
//     $.ajax({
//         url: dayForecast,
//         method: "GET"
//     }).then(function (response) {
//         console.log(response)
//         var currentDay = 1;
//         for (var i = 0; i < response.list.length; i+=8) {
//             var data = response.list[i];
//             console.log(newDate)
//             //#day1()dynamic h2
//             var htmlPath = '#day' + currentDay + ' ';
//             var newDate = data.dt_txt.split(" ").shift()
//             $(htmlPath + 'h4').text(newDate)
//             // $(htmlPath + "img").append(data.i.icon)
//             // console.log(icon)
//             //TODO: implement other code above ++
//             $(htmlPath + "p:first-child").text("Humidity: " + convertKToF(+ data.main.temp))
//             $(htmlPath + "p:last-child").text("Humidity: " + data.main.humidity + "%")
//             currentDay++;
//         }
//     });
// });




// });
