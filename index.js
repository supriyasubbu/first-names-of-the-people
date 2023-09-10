let peopleNames = require("../country/state/city/index");

let firstNames = require("../utilities/utils/index");

let getPeopleInCity = (peopleNames) => {
  return firstNames(peopleNames);
};

module.exports = getPeopleInCity;
