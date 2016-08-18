var request = require('request');
var util = require('util');
var opener = require('opener')
var id = "";

var myJSONObject = {
"includeTestTariffs": "",
    "postcode": "FK10 3SA", 
    "DNOArea": "",
    "singleOrSeparate": "single",
    "existingSupplierNameElec": "British Gas", 
    "existingTariffNameElec": "Standard", 
    "existingSupplierNameGas": "British Gas", 
    "existingTariffNameGas": "Standard", 
    "meterTypeElec": "STD", 
    "meterTypeGas": "", 
    "nightUsePercentElec": null, 
    "existingPayTypesElec": [1], 
    "existingPayTypesGas": [1], 
    "desiredPayTypes": [1], 
    "existingkWhsElec": "3300", 
    "existingkWhsIntervalElec": "year",
    "existingkWhsGas": "3300", 
    "existingkWhsIntervalGas": "year",
    "existingSpendElec": null, 
    "existingSpendIntervalElec": "",
    "existingSpendGas": null, 
    "existingSpendIntervalGas": "",
    "mainsGas": true, 
    "existingPaperlessElec": null, 
    "existingPaperlessGas": null, 
    "hasSmartMeterElec": null, 
    "hasSmartMeterGas": null, 
    "hasGreenDeal": null, 
    "hasIGTmeter": null,

    "unknownUsageTypeElec": "",
    "unknownUsageTypeGas": "",
    "ofgemAverageElec": "",
    "ofgemAverageGas": "",
    "peopleElec": null,
    "peopleGas": null,
    "typeOfHomeElec": null,
    "typeOfHomeGas": null,
    "bedroomsElec": null,
    "bedroomsGas": null,

    "filterSupplierGroup": "", 
    "filterTariffName": "", 
    "filterPaperlessBilling": "", 
    "filterTariffComparison": "all",
    "filterCompetitorRange": "",
    "useDefaultExistingSuppliers": false,

    "flagCallName": "",
    "searchStartDate": null,
    "searchEndDate": null,
    "switchDate": null,

    "rmrCompliantCalculation": true, 
    "showTCR": true, 
    "showNewTIL": true,
    "showDNO": true,
    "sortBy": ""
    };
    
  var switchProv = {
    "quoteId": 1,
    "title": "Mr",
    "forename": "Uku",
    "surname": "Lele",
    "birthDate": "1990-05-14",
    "email": "itdev@energylinx.com",
    "phoneMobile": "07777636388",
    "phoneLandline": "07777636388",
    "employmentStatus": "Employed full time",
    "residentialStatus": "Home Owner",
    "landlordPermission": true,
    "hasSmartMeterElec": true,
    "hasSmartMeterGas": true,
    "specialNeeds": 1,
    "creditCheckAuthority": true,
    "billingSameAsSupply": false,
    "supplySubb": "",
    "supplyBnam": "",
    "supplyBnum": "",
    "supplyDpth": "",
    "supplyThor": "",
    "supplyDdlo": "",
    "supplyDplo": "",
    "supplyTown": "Alloa",
    "supplyCnty": "",
    "supplyPcod": "FK10 3SA"
}

request({
    url: "https://sandbox.svcs2.energylinx.com/v2/partner-resources/ESBTPI/quotes/elecgas/",
    method: "POST",
    headers : {
            "Authorization" : "Token f450d87c7acc23d72faf98e442f941cdc931baa7"
        },
    json: true,   // <--Very important!!!
    body: myJSONObject
}, function (error, response, body){
    console.log(util.inspect(response, {showHidden: false, depth: null}));
});

request({
    url: "https://sandbox.svcs2.energylinx.com/v3/partner-resources/ESBTPI/signups/tag/",
    method: "GET",
    headers : {
            "Authorization" : "Token f450d87c7acc23d72faf98e442f941cdc931baa7"
        },
    json: true  
}, function (error, response, body){
  //  console.log(util.inspect(response, {showHidden: false, depth: null}));
    id = response.body.data;
    console.log(id);
});

opener('https://sandbox.energylinx.co.uk/e2c/esbtpi/index.html?go=start_signup_from_code&supplier=78365864&quote_code=WS1-1ZU0HO374HEOO6HC')





/*
request({
    url: "https://sandbox.svcs2.energylinx.com/v3/partner-resources/APITESTPARTNER/signups/" + id + '/',
    method: "POST",
    headers : {
            "Authorization" : "Token 0c57a506a17c5a794e25ec19de62268bf51d67aa"
        },
    json: true,   // <--Very important!!!
    body: switchProv
}, function (error, response, body){
    //console.log(util.inspect(response, {showHidden: false, depth: null}));
    
});

*/
