const Message = require('../message.js');
const Command = require('../command.js');


describe("Message class", function() {
    //spec 4
    it("throws error if a name is NOT passed into the constructor as the first parameter", function() {
        //do I need to plug in some command examples to make this run?
        expect( function() { new Message();}).toThrow(new Error('Message Name required.'));
      });
    //spec 5
    it("constructor sets name", function() {
        expect(new Message('SOME_NAME').messageName).toBe('SOME_NAME')
      });
    
    //spec 6
    it("contains a commands array passed into the constructor as the 2nd argument", function() {
       let testMessage = new Message('SOME_NAME', ["command1", "command2", "command3"]);
      expect(testMessage.commands).toBe(["command1", "command2", "command3"])
    });
});
