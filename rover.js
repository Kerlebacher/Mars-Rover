class Rover {
   constructor (position, mode = 'NORMAL', generatorWatts = 110) {
   this.position = position;
   this.mode = mode;
   this.generatorWatts = generatorWatts;
   }
   recieveMessage(message){
      this.message = message;
      let results = [];
      message.commandArray
   }
}

console.log(new Rover('ANY_POSITION'))
module.exports = Rover;