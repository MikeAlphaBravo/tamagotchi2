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
      $('#sleep').text(newPet.sleepLevel);
      $('#play').text(newPet.playLevel);
    });

    $('#nameOutput').text(newPet.name);

    $('#toFeed').click(function() {
      newPet.feed();
    });

    $('#toSleep').click(function() {
      newPet.sleep();
    });

    $('#toPlay').click(function() {
      newPet.recess();
    });

  });
});
