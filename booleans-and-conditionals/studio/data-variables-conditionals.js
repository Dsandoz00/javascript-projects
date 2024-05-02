// Initialize Variables below

let date = Monoday-2019-03-18
let time = 10:05:34 AM
let astronautCount = 7
let astronautStatus = ready
let averageAstronautMassKg = 80.7
let crewMassKg = astronautCount * averageAstronautMassKg
let fuelMassKg = 760000
let shuttleMassKg = 74842.31
let totalMasskg = crewMassKg +  fuelMassKg + shuttleMassKg
let maximumMassLimit = 850000
let fuelTempCelsius = -225
let minimumFuelTemp = -300
let maximumFuelTemp = -150
let fuelLevel = 100%
let weatherStatus = clear
let preparedForLiftOff = true

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if (astronautCount <= 7) {
    console.log('launchReady');
}
// add logic below to verify all astronauts are ready

if (astronautStatus === ready) {
    console.log('launchReady');
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000

if (totalMasskg < 85000) {
    console.log('launchReady');
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

if (fuelTempCelsius >= -300 || fuelTempCelsius <= -150) {
    console.log('launchReady');
}

// add logic below to verify the fuel level is at 100%

if (fuelLevel === 100%) {
    console.log('launchReady');
}

// add logic below to verify the weather status is clear

if (weatherStatus === clear) {
    console.log('launchReady');
}

// Verify shuttle launch can proceed based on above conditions

console.log("All systems are clear! Starting space launch sequence.");

console.log("date = Monday 2019-03-18");
console.log("time =10:05:34 AM");
console.log("astronautCount = 7");
console.log("crewMassKg = 564.9");
console.log("fuelMassKg = 760000");
console.log("shuttleMassKg = 74842.31");
console.log("fuelTempCelsius = -225");
console.log("weatherStatus = clear");

console.log("Have a safe trip astro pirates!");