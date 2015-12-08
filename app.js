var hours = [
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm"
];

function CookieStand (locName, minCust, maxCust, avgCookies){
  this.locName = locName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.hourlyCookies = [];
  this.dailyCookies = 0;
}

CookieStand.prototype.customerRand = function(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

CookieStand.prototype.generateHourly = function(){
  for (i = 0; i < hours.length; i++){
    cookiesThisHour = this.customerRand(this.minCust, this.maxCust) * this.avgCookies;
    this.hourlyCookies.push(cookiesThisHour);
    this.dailyCookies += cookiesThisHour;
  }
}

CookieStand.prototype.render = function(){
  var hoursElem = document.getElementById("hours");
  var ulElem = document.createElement("ul");
  ulElem.appendChild(document.createTextNode(this.locName));

  for (i = 0; i < this.hourlyCookies.length; i++){
    var liElem = document.createElement("li");
    liElem.textContent = hours[i] + " - " + Math.round(this.hourlyCookies[i]);
    ulElem.appendChild(liElem);
  }
  var totElem = document.createElement("li");
  totElem.textContent = "Total - " + Math.round(this.dailyCookies);
  ulElem.appendChild(totElem);
  hoursElem.appendChild(ulElem);
}

var pikePlace = new CookieStand ("Pike Place", 17, 88, 5.2);
var seaTac = new CookieStand ("SeaTac Airport", 6, 44, 1.2);
var southCenter = new CookieStand ("Southcenter Mall", 11, 38, 1.9);
var bellevue = new CookieStand ("Bellevue Mall", 20, 48, 3.3);
var alki = new CookieStand ("Alki", 3, 24, 2.6);

pikePlace.generateHourly();
pikePlace.render();

seaTac.generateHourly();
seaTac.render();

southCenter.generateHourly();
southCenter.render();

bellevue.generateHourly();
bellevue.render();

alki.generateHourly();
alki.render();
