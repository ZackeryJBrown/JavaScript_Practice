//array manipulation-
somearray.push() //adds the contents in () to end of array, () can take strings or arrays
.join() //returns array indexes as string, () contents will be between indexes, default comma
.filter(function(currentValue, i, array){}) //returns a new array that pass tests provided by a user defined function inside .filter()
.reduce((accumulator, currentVal) =>
            {accumulator + currentVal.somePropertyOfObject;
            return accumulator;
            },0); /*starting accumulator value, ex 0*/


someObject.every( (someObjects) => someObject.property === "someValue" ); //returns true or false based on if every instance of the checked item passing the testing function
someObject.some( (someObjects) => someObject.property === "someValue" ); //returns true or false if 1 or more of the items pass the testing function

//Stock Functions
//---------------

function isBoolean(value) {
    return typeof value === 'boolean';
};


function isEmptyString(value) {
    return typeof value === 'string' && value.trim().length === 0;
};
