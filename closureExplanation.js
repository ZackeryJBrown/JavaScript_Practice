//closures allow local scope variables to be used after the outer function is closed, as the closure function keeps its state when put into another variable.
//React makes heavy use of this

function outerFunction(){
    let message = "Hello"; //local scope

    function innerFunction(){ //this is the closure function
        return message;
    };

    return innerFunction; //you have to return the closure function to the outer function
};

var greeting = outerFunction();

console.log(greeting());