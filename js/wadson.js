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
    }, 15000);
  }

  setSleep() {
    setInterval(() => {
      if(this.sleepLevel > 0) {
        this.sleepLevel--;
      }
    }, 40000);
  }

  setPlay() {
    setInterval(() => {
      if(this.playLevel > 0) {
        this.playLevel--;
      }
    }, 30000);
  }

  // throw in random for numbers to adjust sleep level or food = sick etc
  // sick check every sleep cycle

  alertHunger(){
    let foodAlert;
    if(this.foodLevel ===  7){
      foodAlert = "Wadson is a little hungry";
      return foodAlert;
    } else if(this.foodLevel ===  4){
      foodAlert = "Wadson's tummy sure is 'a rumbl'n";
      return foodAlert;

    } else if(this.foodLevel === 1){
      foodAlert = "Get that Wadson some foood! He's gonna die man!";
      return foodAlert;

    } else if (this.foodLevel === 0){
      foodAlert = "Killed him! You monster!";
      return foodAlert;
    }
  }

  alertSleepy(){
    let sleepAlert;
    if(this.sleepLevel === 3){
      sleepAlert = "Wadson is fully rested, biiiig stretch!";
      return sleepAlert;

    } else if(this.sleepLevel === 2){
      sleepAlert = "Wadson is a wittle sweepy";
      return sleepAlert;

    } else if(this.sleepLevel === 1){
      sleepAlert = "Wadson is SOOOOO tired, you had better put him to bed soon!";
      return sleepAlert;

    } else if(this.sleepLevel === 0){
      sleepAlert = "Auto SHUTdown yo! Wadson is going to sleep now whether you like it or not.";
      return sleepAlert;
    }

    alertPlay(){
      let playAlert;
      if(this.playLevel === 4){
        playAlert = "Wadson is content";
        return playAlert;

      } else if(this.playLevel === 2){
        playAlert = "Wadson welmed";
        return playAlert;

      } else if(this.playLevel === 1){
        playAlert = "Wadson supes bored, you should go outside and play!";
        return playAlert;

      } else if(this.playLevel === 0){
        playAlert = "Wadson is checked out and socially awkward now because you haven't played in daaays!";
        return playAlert;
      }
  }
  // add functionality for play alerts
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
//levels are 21, 7, 8
   levelCounter() {
     if(this.foodCounter >= 21 && this.sleepCounter >= 7 && this.playCounter >= 8) {
       this.level += 1;
       this.foodCounter = 0;
       this.sleepCounter = 0;
       this.playCounter = 0;
     }
   }

}
