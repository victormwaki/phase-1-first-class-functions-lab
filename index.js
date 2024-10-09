// 1) returnFirstTwoDrivers: Anonymous function to return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2); // Returns the first two drivers in the array
};

// Example usage:
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); 
// Output: ['Antonia', 'Nuru']


// 2) returnLastTwoDrivers: Anonymous function to return the last two drivers
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2); // Returns the last two drivers in the array
};

// Example usage:
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); 
// Output: ['Amari', 'Mo']


// 3) selectingDrivers: Array containing both the returnFirstTwoDrivers and returnLastTwoDrivers functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Example usage:
console.log(selectingDrivers[0](['Antonia', 'Nuru', 'Amari', 'Mo'])); 
// Output: ['Antonia', 'Nuru']

console.log(selectingDrivers[1](['Antonia', 'Nuru', 'Amari', 'Mo'])); 
// Output: ['Amari', 'Mo']


// 4) createFareMultiplier: Higher-order function that returns a fare multiplier function
const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};

// Example usage:
const fareMultiplier = createFareMultiplier(4);
console.log(fareMultiplier(10)); // Output: 40


// 5) fareDoubler: Function that doubles the fare
const fareDoubler = createFareMultiplier(2);

// Example usage:
console.log(fareDoubler(10)); // Output: 20


// 6) fareTripler: Function that triples the fare
const fareTripler = createFareMultiplier(3);

// Example usage:
console.log(fareTripler(10)); // Output: 30


// 7) selectDifferentDrivers: Function that selects either the first two or last two drivers
const selectDifferentDrivers = function(drivers, selectDriversFunction) {
    return selectDriversFunction(drivers);
};

// Example usage:
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers)); 
// Output: ['Antonia', 'Nuru']

console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers)); 
// Output: ['Amari', 'Mo']
