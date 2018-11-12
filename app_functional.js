function mapForEach(arr, fn) {
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i]))
    };
    return newArr;
}


var arr1 = [1,2,3]
console.log('Init: ', arr1);


var arr2 = mapForEach(arr1, function(item) {
    return item *2;
});
console.log(arr2);


var arr3 = mapForEach(arr1, function(item) {
    return item > 2;
});
console.log(arr3);


var checkPastLimit = function(limiter, item) {
    return item > limiter;
};