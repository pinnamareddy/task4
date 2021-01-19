
let request = new XMLHttpRequest();

request.open('GET','https://restcountries.eu/rest/v2/all',true)

request.send();

request.onload = function() {
    let countrydata = JSON.parse(this.response);
//1 name the countries from asia 
let countriesFromAsia = countrydata.filter(x => x.region == "Asia");
console.log(countriesFromAsia);

//2 countries with the population less than 2 lakhs
let countriesPopulation = countrydata.filter((x)=>x.population<200000)
console.log(countriesPopulation);

//3 country name capital and flag
countrydata.forEach(element => {
console.log(element.name,element.capital,element.flag);
    });

//4 print sum of total population of all countries
let  totalpopulation = countrydata.reduce((sum, currentValue)=>sum+currentValue.population,0);
console.log(totalpopulation);

//print the countries which has us dollars as curriencies
let USdollarascurriencies = countrydata.filter((x) =>{
    return x.currencies[0].code == 'USD';});
console.log(USdollarascurriencies);
}
