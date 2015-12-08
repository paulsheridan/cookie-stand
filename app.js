var hours = [
  "Total",
  "10a",
  "11a",
  "12p",
  "1p",
  "2p",
  "3p",
  "4p",
  "5p"
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
  for (i = 1; i < hours.length; i++){
    cookiesThisHour = this.customerRand(this.minCust, this.maxCust) * this.avgCookies;
    this.hourlyCookies.push(cookiesThisHour);
    this.dailyCookies += cookiesThisHour;
  }
}

CookieStand.prototype.render = function(){
  var hoursElem = document.getElementById("hours");
  var tblElem = document.createElement("table");
  var thElem = document.createElement("th");
  thElem.textContent = this.locName;
  tblElem.appendChild(thElem);

  var totElem = document.createElement("td");
  totElem.textContent = Math.round(this.dailyCookies);
  tblElem.appendChild(totElem);
  hoursElem.appendChild(tblElem);

  for (i = 0; i < this.hourlyCookies.length; i++){
    var thElem = document.createElement("td");
    thElem.textContent = Math.round(this.hourlyCookies[i]);
    tblElem.appendChild(thElem);
  }
}

var pikePlace = new CookieStand ("Pike Place", 17, 88, 5.2);
var seaTac = new CookieStand ("SeaTac Airport", 6, 44, 1.2);
var southCenter = new CookieStand ("Southcenter Mall", 11, 38, 1.9);
var bellevue = new CookieStand ("Bellevue Mall", 20, 48, 3.3);
var alki = new CookieStand ("Alki", 3, 24, 2.6);

function firstLine(){
  var hoursElem = document.getElementById("hours");
  var tblElem = document.createElement("table");
  var thElem = document.createElement("th");
  thElem.textContent = "Locations";
  tblElem.appendChild(thElem);

  for (i = 0; i < hours.length; i++){
    var thElem = document.createElement("th");
    thElem.textContent = hours[i];
    tblElem.appendChild(thElem);
    hoursElem.appendChild(tblElem)
  }
}

firstLine();

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
