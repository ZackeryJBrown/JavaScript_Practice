//binary search is much faster than linear search
//it can only be used in sorted arrays due to the computations involved
//a binary search splits the list in half and then searches only in the half that might contain the target value
var testArray = [0,1,2,3,4,5,6,7,8,9,10,100,200,300];
function binarySearch(arr, x){

    let lo = 0;
    let hi = arr.length-1;

    while (lo <= hi){
        let middle = Math.floor((lo + hi) / 2)
        if (arr[middle] === x){
            return "Item found at index: " + middle
        }else if (arr[middle] < x){
            lo = middle + 1;
        }else{
            hi = middle - 1;
        };
    };
    return "Item not found in array";
};

console.log(binarySearch(testArray, 7));