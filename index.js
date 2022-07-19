const returnFirstTwoDrivers = function (arrayOfNames) {
    return arrayOfNames.slice(0, 2)
}

const returnLastTwoDrivers = function (arrayOfNames) {
    return arrayOfNames.slice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
    return function(fare){
       return int * fare;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers (array, drivers) {
    return drivers(array)
}