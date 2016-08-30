$(document).ready(function(){

$('.New-Game').click(function(){
  var score = 0;
  $('.score').text(score);
  $('.card').css('background', 'black');
  $('.cover').show();
  var randomNumber = Math.floor(((Math.random() * 20) + 1));
  var lion = $('.lion');
  var lion2 = $('.lion2');
  var tiger = $('.tiger');
  var tiger2 = $('.tiger2');
  var elephant = $('.elephant');
  var elephant2 = $('.elephant2');
  var bear = $('.bear');
  var bear2 = $('.bear2');
  var giraffe = $('.giraffe');
  var giraffe2 = $('.giraffe2');
  var dog = $('.dog');
  var dog2 = $('.dog2');
  var cat = $('.cat');
  var cat2 = $('.cat2');
  var monkey = $('.monkey');
  var monkey2 = $('.monkey2');
  var fish = $('.fish');
  var fish2 = $('.fish2');
  var dolphin = $('.dolphin');
  var dolphin2 = $('.dolphin2');

  var animalArr = [lion, lion2, tiger, tiger2, elephant, elephant2, bear, bear2, giraffe, giraffe2, dog, dog2, cat, cat2, monkey, monkey2, fish, fish2, dolphin, dolphin2];

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

    var shuffledAnimalArray = shuffleArray(animalArr);
    var animalArr = [lion, lion2, tiger, tiger2, elephant, elephant2, bear, bear2, giraffe, giraffe2, dog, dog2, cat, cat2, monkey, monkey2, fish, fish2, dolphin, dolphin2];
    for (var i = 0; i < 20; i++) {
    animalArr[i].remove();
  };
    $('.mainSection').append(shuffledAnimalArray);


$('.card').click(function(){
  var firstCard = $(this);
  var first = $(this).attr('src');



$('.card').click(function(){
  var second = $(this).attr('src');
  if(first === second){
    $(this).css("background", "yellow");
    firstCard.css("background", "yellow");
    score += 1;
    $('.score').text(score);
   };
  if (score >= 10) {
    alert("YOU FOUND ALL THE MATCHES!");
  };
  first = undefined;
  second = undefined;

})

});
});
});
