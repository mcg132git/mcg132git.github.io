var temp = parseInt(document.getElementById('currentTemp').innerHTML);

var windpseed = parseInt(document.getElementById('windSpeed').innerHTML);

var windchill = 35.74 + 0.6215*temp - 35.75*(Math.pow(windpseed,0.16)) + 0.4275*temp*(Math.pow(windpseed,0.16));

document.getElementById("windChill").innerHTML= windchill.toFixed(2);