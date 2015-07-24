$( document ).ready(function() {

function eintragen() {
     var stelle = $('input[name=stelle]:checked').val();
    
    if ( stelle == 'v' ) {
        $('ul').prepend('<li>'+ $('input#name').val()+'</li>')
    } else {
        $('ul').append('<li>'+ $('input#name').val()+'</li>')
    }
    
}


$('form#formular').submit ( function () {
    
    eintragen();
    
     return false;
});

var ichBinEineVariable = 5;

// var name = [ "Jenny", "Stefan", "Tico", "Andi", "Peter" ];
// var meineListe = [ "Jenny", "Stefan", "Tico", "Andi", "Peter" ];


/*for ( zaehler = 0; zaehler < name.length; zaehler = zaehler +1 ) {
    $("ul").append ( '<li>' + name [ zaehler ] + '</li> );
}

console.log ( name );

for ( zaehler = name.length-1; zaehler >= 0; zaehler = zaehler - 1 ) {
    $("ul").prepend ( '<li>' + name [ zaehler ] + '</li>' );
}*/

// name.length => Anzahl Einträge

/*meineListe.forEach ( function( el, idx ) {
$('ul').prepend('<li>'+ el +'</li>')
});*/

/*
var zaehler=0;
while(zaehler<name.length) {
    console.log (zaehler)
$('ul').append('<li>'+ name[zaehler] +'</li>');
    zaehler++;
}*/


/*var zaehler=name.length-1;
while(zaehler>=0) {
    console.log (zaehler)
    $('ul').prepend('<li>' + name[zaehler] +'</li');
    zaehler--;
}*/

/*

var zaehler=0;
do {
     $('ul').append('<li>' + name [zaehler] +'</li>');
    zaehler++;
} while ( zaehler<name.length);

*/


/*var zaehler=name.length-1
do {
    $('ul').prepend('<li>'+name [zaehler]+'</li>');
    zaehler--;
} while (zaehler>=0);
*/







$('a#button_vor').click(function() {
   
    // selektiere (Liste) aus, .füge-an (Element xxx)
    $('ul').append( $('ul li:first') );

    
    // a      => Variable
    // 'a'    => Text
    // $('a') => Selektor
})
    
$('a#button_zurueck').click(function() {
    $('ul').prepend( $('ul li:last') );

  
})
                            
$('a#pressme').click(function() {
        eintragen();
   
    
    
})    

console.log('ich warte jetzt hier auf einen Klick');

$('li').click (function() {
	alert ( 'HALLO' );
    $('h1').html( $('h1').attr('data-title')+$(this).text())
    $(this).remove()
})

$( "li" ).live( "click", function() {

});


$( document ).on( "click", "li", function() {
    $('h1').html( $('h1').attr('data-title')+$(this).text())
    $(this).remove()

});

$.get( "namen.txt", function( data ) {
	
	console.log ( data );
	var namen = data.split("\n" );
	console.log ( namen );
	namen.forEach(function(el, idx) {
		console.log ( el );
		$('ul').append('<li>'+ el + '</li>');
	});
   console.log('So, die Daten sind jetzt da');
});

$( "li" ).live( "mouseenter", function() {
	$(this).prepend('<span>Hallo</span>');
});


/**
 * <p> <div> <span>
 **/

$( document ).on( "mouseleave", "li", function() {
	console.log('leaving!');
	//$(this).children().remove('<span>Hallo</span>');
	console.log($(this).children('span'));
	$(this).children('span').remove();
	
});





});