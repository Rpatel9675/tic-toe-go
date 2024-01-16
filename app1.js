// console.log("working");
// let arr=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
//     [0,4,7],
//     [1,4,8],
//     [7,5,3]
// ];
// let ar=[3,2,1];


// console.log(arr.includes(ar));
function isSubset(arr, subArr) {
    if (arr.length !== subArr.length) {
        return false;
    }

    // Sort both arrays
    arr = arr.slice().sort();
    subArr = subArr.slice().sort();

    // Check if both arrays are equal
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== subArr[i]) {
            return false;
        }
    }

    return true;
}

let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0, 4, 7],
    [1, 4, 8],
    [7, 5, 3]
];

let ar = [3, 1, 2];

// Search for ar in arr
let found = false;
for (let i = 0; i < arr.length; i++) {
    if (isSubset(arr[i], ar)) {
        found = true;
        break;
    }
}

if (found) {
    console.log("Array found in the 2D array.");
} else {
    console.log("Array not found in the 2D array.");
}
