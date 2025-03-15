function stringChop(str, size) {
  // your code here
  if(!str)return [];
  let ans = [];
 for (let index = 0; index < str.length; index+=size) {
 	let s = str.slice(index,index+size);
 	ans.push(s);
 }
 return ans;
}
console.log("Try programiz.pro");


// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
