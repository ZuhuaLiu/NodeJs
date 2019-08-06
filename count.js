var counter = function(arr) {
    return arr.length;
}

var adder = function(a,b) {
    return a + b;
}
// export { counter };
module.exports.counter = counter;
module.exports.adder = adder;