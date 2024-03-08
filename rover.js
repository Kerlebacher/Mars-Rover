class Rover {
   constructor (position, mode = 'NORMAL', generatorWatts = 110) {
   this.position = position;
   this.mode = mode;
   this.generatorWatts = generatorWatts;
   }
   recieveMessage(message){
      this.message = message;
      let results = [];

   }
}


module.exports = Rover;