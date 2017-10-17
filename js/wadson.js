export class Wadson {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.sleepLevel = 3;
    this.playLevel = 5;
    this.level = 1;
    this.foodCounter = 0;
    this.sleepCounter = 0;
    this.playCounter = 0;
  }

  setHunger() {
    setInterval(() => {
      if(this.foodLevel > 0) {
        this.foodLevel--;
      }
    }, 1000);
  }

  setSleep() {
    setInterval(() => {
      if(this.sleepLevel > 0) {
        this.sleepLevel--;
      }
    }, 1000);
  }

  setPlay() {
    setInterval(() => {
      if(this.playLevel > 0) {
        this.playLevel--;
      }
    }, 1000);
  }

  // throw in random for numbers to adjust sleep level or food = sick etc
  // sick check every sleep cycle

  alertHunger(){
    if(this.foodLevel ===  7){
      alert("Wadson is a little hungry");
      return("Wadson is a little hungry");

    } else if(this.foodLevel ===  4){
      alert("Wadson's tummy sure is 'a rumbl'n");
      return("Wadson's tummy sure is 'a rumbl'n");

    } else if(this.foodLevel === 1){
      alert("Get that Wadson some foood! He's gonna die man!");
      return("Get that Wadson some foood! He's gonna die man!");

    } else if (this.foodLevel === 0){
      alert("You killed him! You monster!");
      return("You killed him! You monster!");
    }
  }

  alertSleepy(){
    if(this.sleepLevel === 3){
      alert("Wadson is fully rested, biiiig stretch!");
      return("Wadson is fully rested, biiiig stretch!");

    } else if(this.sleepLevel === 2){
      alert("Wadson is a wittle sweepy");
      return("Wadson is a wittle sweepy");

    } else if(this.sleepLevel === 1){
      alert("Wadson is SOOOOO tired, you had better put him to bed soon!");
      return("Wadson is SOOOOO tired, you had better put him to bed soon!");

    } else if(this.sleepLevel === 0){
      alert("Auto SHUTdown yo! Wadson is going to sleep now whether you like it or not.");
      return("Auto SHUTdown yo! Wadson is going to sleep now whether you like it or not.");
    }
  }

   feed() {
    this.foodCounter += 1;
    this.foodLevel = 10;
   }

   sleep() {
     this.sleepCounter += 1;
     this.sleepLevel = 3;
   }

   recess() {
     this.playCounter += 1;
     this.playLevel = 5;
   }

   levelCounter() {
     if(this.foodCounter === 21 && this.sleepCounter === 7 && this.playCounter === 8) {
       this.level += 1;
     }
   }

}
