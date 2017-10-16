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

  wadsonDie() {
   if (this.foodLevel === 0) {
     return "you're dead";
     }
   }

   feed() {
     this.foodLevel = 10;
     return this.foodLevel;
   }

   sleep() {
     this.sleepLevel = 3;
     return this.sleepClear;
   }

   play() {
     this.playLevel = 5;
     return this.playLevel;
   }

}
