// Immediately Ivoked Function Expressions (IIFE)


(function chai(){    // Named IIFE
    console.log ('DB CONNECTED')  // Values in function can get polluted from the Global scope
}) ();   

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`) // Simple IIFE
}) ("Anuj")


