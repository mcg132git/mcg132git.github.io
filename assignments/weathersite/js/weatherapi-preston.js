var requestURL = "https://api.openweathermap.org/data/2.5/weather?id=5799783&units=imperial&apiKey=8be61558448ca607f0cc9e858b5108ba";
var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var weatherInfo = request.response;
        callweatherInfo(weatherInfo);
}

function callweatherInfo(jsonObj) {

console.log (jsonObj);

document.getElementById("current-temp").innerHTML = jsonObj.main.temp;
document.getElementById("humidity").innerHTML = jsonObj.main.humidity;
document.getElementById("wind-speed").innerHTML = jsonObj.wind.speed;
}