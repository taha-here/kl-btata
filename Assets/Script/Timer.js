 // Change Date The Month Here*********************///
 var countDownDate = new Date("Nov 1, 2021 00:00:00").getTime();

 var x = setInterval(function () {
   var now = new Date().getTime();
   var distance = countDownDate - now;

   // Here is The Time calculations for days, hours, minutes and seconds
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

   // Here is Output Generated***************/////
   var view_day = document.getElementById("day");
   var view_hour = document.getElementById("hour");
   var view_minute = document.getElementById("minute");
   var view_second = document.getElementById("second");
   view_day.innerHTML = formatTime(days);
   view_hour.innerHTML = formatTime(hours);
   view_minute.innerHTML = formatTime(minutes);
   view_second.innerHTML = formatTime(seconds);



   // If the count down is over, write some text 
   if (distance < 0) {
     clearInterval(x);
     view_day.innerHTML = formatTime(0);
     view_hour.innerHTML = formatTime(0);
     view_minute.innerHTML = formatTime(0);
     view_second.innerHTML = formatTime(0);
   }
 }, 1000);

 function formatTime(time) {
   return time < 10 ? `0${time}` : time;
 }