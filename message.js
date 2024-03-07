class Message {
   constructor(messageName, commandArray) {
      this.messageName = messageName;
      if (!messageName) {
        throw Error("Message Name required.");
      }
      this.commandArray = commandArray;
    }
  
}

module.exports = Message;