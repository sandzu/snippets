const fs = require('fs');
var txtFile = "./03_input.txt";
var str = fs.readFileSync(txtFile,'utf8');
const arr = str.split(" ").map((str )=> (parseInt(str)) );
const res = maxSubsetSum(arr);
console.log(res);
console.log('correct:', 76497274 === res)

function maxSubsetSum(arr) {
    const sums = [];
    sums.push(arr[0]);
    sums.push(Math.max(arr[0], arr[1]));
    arr.shift();
    arr.shift();

    arr.forEach((el)=>{
      sums.push(
        Math.max(
          sums[sums.length - 1],
          el + sums[sums.length - 2],
          sums[sums.length - 2]
    ));});

    return(Math.max(sums.pop(), sums.pop()))
}
