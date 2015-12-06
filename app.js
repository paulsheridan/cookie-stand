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

var pikePlace = {
  minCust: 17,
  maxCust: 88,
  avgCookies: 5.2,
  hourlyCookies: [],
  dailyCookies: 0,

  customerRand: function (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  generateHourly: function (){
    for (i = 0; i < hours.length; i++){
      cookiesThisHour = this.customerRand(this.minCust, this.maxCust) * this.avgCookies;
      this.hourlyCookies.push(cookiesThisHour);
      this.dailyCookies += cookiesThisHour;
    }
  },

  render: function (){
    var hoursElem = document.getElementById("hours");
    var ulElem = document.createElement("ul");
    ulElem.appendChild(document.createTextNode("Pike Place Market"));

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
}

var seaTac = {
  minCust: 6,
  maxCust: 44,
  avgCookies: 1.2,
  hourlyCookies: [],
  dailyCookies: 0,

  customerRand: function (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  generateHourly: function (){
    for (i = 0; i < hours.length; i++){
      cookiesThisHour = this.customerRand(this.minCust, this.maxCust) * this.avgCookies;
      this.hourlyCookies.push(cookiesThisHour);
      this.dailyCookies += cookiesThisHour;
    }
  },

  render: function (){
    var hoursElem = document.getElementById("hours");
    var ulElem = document.createElement("ul");
    ulElem.appendChild(document.createTextNode("SeaTac Airport"));

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
}

var southCenter = {
  minCust: 17,
  maxCust: 88,
  avgCookies: 5.2,
  hourlyCookies: [],
  dailyCookies: 0,

  customerRand: function (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  generateHourly: function (){
    for (i = 0; i < hours.length; i++){
      cookiesThisHour = this.customerRand(this.minCust, this.maxCust) * this.avgCookies;
      this.hourlyCookies.push(cookiesThisHour);
      this.dailyCookies += cookiesThisHour;
    }
  },

  render: function (){
    var hoursElem = document.getElementById("hours");
    var ulElem = document.createElement("ul");
    ulElem.appendChild(document.createTextNode("Southcenter Mall"));

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
}

var bellevue = {
  minCust: 17,
  maxCust: 88,
  avgCookies: 5.2,
  hourlyCookies: [],
  dailyCookies: 0,

  customerRand: function (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  generateHourly: function (){
    for (i = 0; i < hours.length; i++){
      cookiesThisHour = this.customerRand(this.minCust, this.maxCust) * this.avgCookies;
      this.hourlyCookies.push(cookiesThisHour);
      this.dailyCookies += cookiesThisHour;
    }
  },

  render: function (){
    var hoursElem = document.getElementById("hours");
    var ulElem = document.createElement("ul");
    ulElem.appendChild(document.createTextNode("Bellevue Square"));

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
}

var alki = {
  minCust: 17,
  maxCust: 88,
  avgCookies: 5.2,
  hourlyCookies: [],
  dailyCookies: 0,

  customerRand: function (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  generateHourly: function (){
    for (i = 0; i < hours.length; i++){
      cookiesThisHour = this.customerRand(this.minCust, this.maxCust) * this.avgCookies;
      this.hourlyCookies.push(cookiesThisHour);
      this.dailyCookies += cookiesThisHour;
    }
  },

  render: function (){
    var hoursElem = document.getElementById("hours");
    var ulElem = document.createElement("ul");
    ulElem.appendChild(document.createTextNode("Alki"));

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
}

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
