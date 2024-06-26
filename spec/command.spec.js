const Command = require('../command.js');

describe("Command class", function() {
//spec 1
  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    expect( function() { new Command();}).toThrow(new Error('Command type required.'));
  });
//spec 2
  it("constructor sets command type", function() {
    expect(new Command('SOME_STRING').commandType).toBe('SOME_STRING')
  });

//spec 3
it("constructor sets a value passed in as the 2nd argument", function() {
  expect(new Command('SOME_STRING', 'SOME_VALUE').value).toBe('SOME_VALUE')
});
});
