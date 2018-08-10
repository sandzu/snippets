var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function sendPost(url, readyStateChange){
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", url, true);
  xhttp.setRequestHeader('Content-Type', 'application/json');
  xhttp.onreadystatechange = readyStateChange;
  xhttp.send();
}

var key, boxIds;
var url = "https://challenge.code3scape.com/boxes";
var cb1 = function() {
  const res = JSON.parse(this.responseText);
  key = res.key;
  boxIds = res.boxIds;
  console.log("key, boxIds: ", key, boxIds)
  continue();
}

sendPost(url, cb1);
const vals = [];

// console.log(key, boxIds);
function continue(){
  boxIds.forEach((id)=>{
    var url = "https://challenge.code3scape.com/boxes/" + id + '/' + key
    cb2 = function() {
      const res = JSON.parse(this.responseText);
      // console.log(res)
      vals.push(res.val);
    };
    xhttp.send();
  });

  continue2();
}

continue2(){
  const largestVal = vals.sort()[0];
  const name = 'andzu schaefer';
  const email = 'andzu@protonmail.com';

}
