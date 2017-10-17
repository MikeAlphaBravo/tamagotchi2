import { Wadson } from './../js/wadson.js';

$(document).ready (function() {
  $('#name').submit(function(event) {
    event.preventDefault();

    let tamagotchiName = $('#tamagotchiName').val();
    let newPet = new Wadson(tamagotchiName);

    // newPet.alertPlay();
    // newPet.alertSleepy();
    // newPet.alertHunger();
    newPet.setHunger();
    newPet.setSleep();
    newPet.setPlay();

    setInterval(function() {
      $('#hunger').text(newPet.foodLevel);
      $('#level').text(newPet.level);
      $('#sleep').text(newPet.sleepLevel);
      $('#play').text(newPet.playLevel);
      $('#alertFeed').text(newPet.alertHunger());
      $('#alertSleep').text(newPet.alertSleepy());
      $('#alertPlay').text(newPet.alertPlay());
    });

    $('#nameOutput').text(newPet.name);

    $('#toFeed').click(function() {
      newPet.feed();
      newPet.levelCounter();
      $('#alertFeed').text("")
    });

    $('#toSleep').click(function() {
      newPet.sleep();
      newPet.levelCounter();
      $('#alertSleep').text("");
    });

    $('#toPlay').click(function() {
      newPet.recess();
      newPet.levelCounter();
      $('#alertPlay').text("");
    });

  });
});
