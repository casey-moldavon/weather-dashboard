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
    };



// });
