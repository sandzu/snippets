const fs = require('fs');
var txtFile = "./04_input.txt";
var str = fs.readFileSync(txtFile,'utf8');
const arr = str.split(" ").map((str )=> (parseInt(str)) );
const res = maxSubsetSum(arr);
console.log(res);
// Complete the abbreviation function below.
function abbreviation(a, b) {
    let idxA = 0;
    let idxB = 0;
    while(idxB <= b.length - 1){
        if(idxA >= a.length - 1){ return('NO'); } //checked all of a
        if(b[idxB] === a[idxA].toUpperCase()){
            //move on to the next character
            idxB += 1;
            idxA += 1;
        }else{
            //either delete/ignore the lowercase char in a
            if( a[idxA] === a[idxA].toLowerCase() ){
                idxA += 1;
            }else{
            //or return false
                return('NO');
            }
        }
    };
    idxA +=  1;
    while( idxA <= a.length - 1){
      if(a[idxA] === a[idxA].toUpperCase() ){
          return('NO')
      };
        idxA += 1;
    };
    return('YES');
}
