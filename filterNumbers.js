//remove items from a list that are not a number, regardless of data type (str, int)

//recognizes numbers in strings as numbers
console.log(isNaN("123"));

//returns false, so it is a number
console.log(isNaN(123));

//decimals also return false to denote being a number
console.log(isNaN(1.5));

//NaN will return that null, true, and "" empty string are numbers, this is incorrect
console.log("NaN Fails in these instances");
console.log(isNaN(null));
console.log(isNaN(""));
console.log(isNaN(true));


testArray = [1, "2", "", "    ", " 123", NaN, "abc", "abc1", false, true, null];

//creates a function to test if the value is a beelean value
function isBoolean(value) {
    return typeof value === 'boolean';
};

//checks true/false for "is the value a string and if you trim empty space is there nothing, 0, there?"
//will return example " 123" as is, as it evaluates to length===3 after .trim()
function isEmptyString(value) {
    return typeof value === 'string' && value.trim().length === 0;
};

function filterNonNumbers(input){
    var result = input.filter(function(value, i){
            if (isNaN(value) || isBoolean(value) || isEmptyString(value) || value === null){
                return false;
            }
            return true;
        }
    )
    return result;
};


console.log(filterNonNumbers(testArray));