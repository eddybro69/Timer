(function() {
    

    window.onload = function() {

        document.getElementById("start").onclick = function() {
            // Both boxes have to be filled, if not NaN will appear.
            var hoursToMin = document.getElementById("hours").value * 60;
            var min = document.getElementById("minutes").value;
            document.getElementById("timer").innerHTML = 60 * (parseInt(min) + parseInt(hoursToMin));
            var timer = setInterval(countDown, 1000);
            timer;
            if (document.getElementById("timer").innerHTML <= 0) {
                alert("TIME'S UP");
                clearInterval(timer);
            }
            document.getElementById("stop").onclick = function() {
                document.getElementById("timer").innerHTML = 0000;
                clearInterval(timer);
            }
        }
    }
    
    function countDown() {
        var currentTime = document.getElementById("timer").innerHTML;
        currentTime = currentTime - 1;
        document.getElementById("timer").innerHTML = currentTime;
    }
})();