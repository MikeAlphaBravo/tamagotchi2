import { Wadson } from './../js/wadson.js';

$(document).ready (function() {
  $('#name').submit(function(event) {
    event.preventDefault();
    let tamagotchiName = $('#tamagotchiName').val();
    let newPet = new Wadson(tamagotchiName);
    $('#nameOutput').text(newPet.name);
  });
});
