let launchReady = false;
let fuelLevel = 27000;

if (fuelLevel >= 20000) {
   console.log("Fuel level cleared.");
   let launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   let launchReady = false;
}

if (launchReady) {
   console.log("10, 9, 8...");
   console.log("Fed parrot...");
   console.log("6, 5, 4...");
   console.log("Ignition...");
   console.log("3, 2, 1...");
   console.log("Liftoff!");
} else {
   console.log("Launch scrubbed.");
}
