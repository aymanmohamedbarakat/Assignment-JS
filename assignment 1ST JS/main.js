
let price = prompt("enter price");
let discount = prompt("enter discount");


let tex = discount * 14/100 ;
let dicountPrice = (price * discount/100) + tex;

console.log("ur price:" + dicountPrice);

document.write("ur price:" + dicountPrice)