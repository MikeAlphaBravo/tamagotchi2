export class Wadson {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.sleepLevel = 3;
    this.playLevel = 5;
    this.level = 1;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 15000);
  }

  setSleep() {
    setInterval(() => {
      this.sleepLevel--;
    }, 40000);
  }

  setPlay() {
    setInterval(() => {
      this.playLevel--;
    }, 30000);
  }

  // throw in random for numbers to adjust sleep level or food = sick etc
  // sick check every sleep cycle

  wadsonDie() {
   if (this.foodLevel === 0) {
     return true;
     }
   }

   feed() {
     this.foodLevel = 10;
   }

   sleep() {
     this.sleepLevel = 3;
   }

   play() {
     this.playLevel = 5;
   }

}
