function rand(num) {
    //Returns a random integer between 0 and num
    var RandomNum = num * Math.random();
    var result = Math.floor(RandomNum);
    return result;
}

console.log(rand(6));
console.log(rand(1000));
console.log(rand(2));
console.log(rand(0));