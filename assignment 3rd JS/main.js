// calculator with eval function
// function calc(){
//   let num = prompt("enter number u need to calc")
//   let calc = eval(num);
//   document.write(calc);
// }


let userEcpresiion = "";

function addString(val) {
  userEcpresiion= userEcpresiion + val
}

function calcExp() {
  console.log(eval(userEcpresiion))
}