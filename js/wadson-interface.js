import { Wadson } from './../js/wadson.js';

$(document).ready (function() {
  $('#name').submit(function(event) {
    event.preventDefault();

    let tamagotchiName = $('#tamagotchiName').val();
    let newPet = new Wadson(tamagotchiName);

    newPet.setHunger();
    newPet.setSleep();
    newPet.setPlay();

    setInterval(function() {
      $('#hunger').text(newPet.foodLevel);
      $('#level').text(newPet.level);
      $('#sleep').text(newPet.sleepLevel);
      $('#play').text(newPet.playLevel);
    });

    $('#nameOutput').text(newPet.name);

    $('#toFeed').click(function() {
      newPet.feed();
      newPet.levelCounter();
    });

    $('#toSleep').click(function() {
      newPet.sleep();
      newPet.levelCounter();
    });

    $('#toPlay').click(function() {
      newPet.recess();
      newPet.levelCounter();
    });

  });
});
