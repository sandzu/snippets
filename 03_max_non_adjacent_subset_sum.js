const fs = require('fs');
var txtFile = "./03_input.txt";
var str = fs.readFileSync(txtFile,'utf8');
const arr = str.split(" ").map((str )=> (parseInt(str)) );
const res = maxSubsetSum(arr);
console.log(res);


function maxSubsetSum(arr) {
    const sums = [];
    arr.forEach((el, idx)=>{
        if(idx <=1){
          sums.push(el);
        }else{
          sums.push(Math.max(sums[idx-1], el+sums[idx-2], sums[idx-2]));
        };
    });
    return(Math.max(sums.pop(), sums.pop()))
}
