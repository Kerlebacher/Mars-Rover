const Message = require('../message.js');
const Command = require('../command.js');

// // NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
// //       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {
    //spec 4
    it("throws error if a name is NOT passed into the constructor as the first parameter", function() {
        //do I need to plug in some command examples to make this run?
        expect( function() { new Message();}).toThrow(new Error('Message Name required.'));
      });
//     //spec 5
//     it("constructor sets name", function() {
//         expect(new Message('SOME_NAME').messageName).toBe('SOME_NAME')
//       });
    
//     //spec 6
//     // it("contains a commands array passed into the constructor as the 2nd argument", function() {
//     //     let command1 = new Command ('SOME_STRING1', 'Value1');
//     //     let command2 = new Command ('SOME_STRING2', 'Value2');
//     //     let command3 = new Command ('SOME_STRING3', 'Value3');
//     //     let testMessage = new Message('SOME_NAME', [command1, command2, command3]);
//     //   expect(testMessage.commands).toBe([command1, command2, command3])
//     // });

});
