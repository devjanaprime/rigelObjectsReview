// inventory app

// inventory array
let inventory = [];

// add object
function addObject( size, color, name ){
    // create a new object
    let newObject = {
        size: size, 
        color: color, 
        name: name
    } // end newObject
    // push it into the array
    inventory.push( newObject );
    // display inventory
    console.log( inventory );
    // Luke says to do this
    return true;
} // end addObject

// search function
function searchInventory( size, color ){
    console.log( 'in searchInventory:', size );
    let matches = [];
    // loop through the inventory array
    for( item of inventory ){
        // if this item matches size
        if( item.size === size && item.color === color ){
            console.log( 'match found:', item );
            // push into matches array
            matches.push( item );
        } // end size match
    } // end for loop
    // return matches array
    return matches;
} // end search function

$( document ).ready( readyNow );

function readyNow(){
    console.log( 'JQ' );
    $( '#searchButton' ).on( 'click', searchNow );
} // end readyNow

function searchNow(){
    searchInventory( 'small', 'red' );
} // end searchClick