var main = function() {

  function handler( event ) {
  var target = $( event.target );
  if ( target.is( ".cards" ) ) {
    target.children().toggle();
  }
}
$( ".cards" ).click( handler ).find( "p" ).hide();
}





$(document).ready(main);
