var events = require('events');
var eventEmitter = new events.EventEmitter();
const { argv } = require('node:process');

//Create an event handler:
var myEventHandler = function (...args) {
  const parameters = args.join(', ');
  console.log(`event: ${parameters} handled`);
}

// print process.argv
argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
  if (index > 1) {
    //Assign the event handler to an event:
    eventEmitter.on(val, myEventHandler);
    //Fire the 'scream' event:
    eventEmitter.emit(val, val);
  }
});
