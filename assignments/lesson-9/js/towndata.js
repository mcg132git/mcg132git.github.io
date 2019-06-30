
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var townInfo = request.response;
        calltownInfo(townInfo);
}

function calltownInfo(jsonObj) {

var towns = jsonObj['towns'];

console.log(towns);
console.log(towns[0].name);

towns.forEach(town => {
        var TownName = town.name.replace(/\s/g,'');
  if(TownName =='Preston' || TownName =='SodaSprings' || TownName =='FishHaven'){
          document.getElementById(TownName+'Name').innerHTML = town.name;

          document.getElementById(TownName+'Founded').innerHTML = 'Year Founded: ' + town.yearFounded;
  }      
});


}