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