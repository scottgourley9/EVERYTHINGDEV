$(document).ready(function(){

$('#submit').on('click', function(){

  var name = $('input').val();
  name = name.toLowerCase();
  $('#names').append(name);
  $('input').val('')


})






})
