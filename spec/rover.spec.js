const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

describe("Rover class", function() {

  // spec 7   is there a way to test all these on one line?
  it("constructor sets position and default values for mode and generatorWatts", function(){
    expect(new Rover('ANY_POSITION').position).toBe('ANY_POSITION');
    expect(new Rover('ANY_POSITION').mode).toBe('NORMAL');
    expect(new Rover('ANY_POSITION').generatorWatts).toBe(110);
  });
   // spec 8
  //  it("response returned by receiveMessage contains the name of the message", function(){
  //   let testRover = new Rover(99493);
  //   let testCommands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
  //   let testMessage = new Message('SOME TEST MESSAGE', testCommands);
  //       expect(testRover.receiveMessage(testMessage).message).toBe('SOME TEST MESSAGE');
  //  });
  //  // spec 9
  //  it("response returned by receiveMessage includes two results if two commands are sent in the message", function(){
  //   expect().toBe()
  // });
  //  // spec 10
  //  it("responds correctly to the status check command", function(){
  //   expect().toBe()
  // });
  //  // spec 11
  //  it("responds correctly to the mode change command", function(){
  //   expect().toBe()
  // });
  //  // spec 12
  //  it("responds with a false completed value when attempting to move in LOW_POWER mode", function(){
  //   expect().toBe()
  // });
  //  // spec 13
  //  it("responds with the position for the move command", function(){
  //   expect().toBe()
  // });

});
