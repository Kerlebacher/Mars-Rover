class Rover {
   constructor (position, mode = 'NORMAL', generatorWatts = 110) {
   this.position = position;
   this.mode = mode;
   this.generatorWatts = generatorWatts;
   }
   receiveMessage (message) {
      this.message = message;
      

   }
}


module.exports = Rover;