var Fibo = function (firstTerm, secondTerm, nextTerm, n) {
    var fiboString = '' + firstTerm + ',' + secondTerm;
    for (var i = 2; i < n; i++) {
        fiboString += ',' + nextTerm;
        firstTerm = secondTerm;
        secondTerm = nextTerm;
        nextTerm = firstTerm + nextTerm;
    }
    return fiboString;
};
var n = 15;
var firstTerm = 0;
var secondTerm = 1;
var nextTerm = firstTerm + secondTerm;
var result = Fibo(firstTerm, secondTerm, nextTerm, n);
console.log(result);
