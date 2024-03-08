class Message {
   constructor(messageName, commands) {
      this.messageName = messageName;
      if (!messageName) {
        throw Error("Message Name required.");
      }
      this.commands = commands;
    }
}

module.exports = Message; 