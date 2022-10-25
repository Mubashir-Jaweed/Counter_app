function addcount() {
  var value = document.querySelector(".value").innerHTML;
  var input2Value = document.querySelector(".SecInp").value;


  if (input2Value > 0) {
    var count = parseFloat(value) + parseFloat(input2Value);
    document.querySelector(".SecInp").value = 0
  } else {
    var count = parseFloat(value) + 1;
  }

  document.querySelector(".value").innerHTML = count;
}








function subcount() {
  var value = document.querySelector(".value").innerHTML;
var input2Value = document.querySelector(".SecInp").value
if (input2Value > 0){
    var count =parseFloat(value) - parseFloat(input2Value)
    document.querySelector(".SecInp").value =0
} 
else{ 
    var count = parseFloat(value) -1;
}

  document.querySelector(".value").innerHTML = count;
}








const addbyinput = () => {
  var value = document.querySelector(".value").innerHTML;
  var inputValue = document.querySelector(".input").value;

  var count = parseFloat(value) + parseFloat(inputValue);
  document.querySelector(".value").innerHTML = count;
};








var date = new Date();

var day = date.getDay();
var min = date.getMinutes();
var hour = date.getHours();
var sec = date.getSeconds();


// setTimeout(function(){
// console.log('Print Value After 2 second')
// }, 2000);

// setInterval(function(){

// },1000)

// var age = parseFloat(prompt("18 age"));

// if(age === '18'){
//     console.log('.K')
// }
// else if(age==='19') {
//         console.log(".K");

// }
// else{
//         console.log("False");
// }

// if(18 <= age){
//   console.log('.k')
// }else{
//     console.log(false)
// }
