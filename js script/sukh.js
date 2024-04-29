 
  
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let msg = document.querySelector(".msg");
let msgbox = document.querySelector(".msgbox");
let newmsgbtn = document.querySelector(".new-msg-btn");


let turn0= true;
let winpattern = [
          [0,1,2],
          [0,3,6],
          [3,4,5],
          [6,7,8],
          [0,4,8],
          [1,4,7],
          [2,5,8],
          [7,5,3] ];



boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    
    if(turn0 === true){
      box.innerText  = "o";
      turn0 = false;
       box.style.color="red"
    }else{
      box.innerText="x";
      turn0=true;
      box.style.color="blue"
    }box.disabled= true ;
    checkwinner();
}); });

const disabledbox = ()=>{
  for (let box of boxes){
box .disabled= true ;
  }
}


const resbtn =() =>{
  turn0= true ;
  enablebox();
  msgbox.classList.add("hide");
}

const enablebox = ()=>{
  for (let box of boxes){
box .disabled= false ;
box.innerText="";
  }
}


const showwinner = (winner) => {
  msg.innerText=` congress , winner is ${winner}`;
  msgbox.classList.remove("hide");
  disabledbox();

};
 
let checkwinner = () =>{
   for(let pattern of winpattern){
   let pos1val = boxes[ pattern[0]].innerText;
   let pos2val = boxes[ pattern[1]].innerText;
   let pos3val = boxes[ pattern[2]].innerText;

   if(pos1val != "" && pos2val != "" && pos3val != ""){
    if (pos1val === pos2val && pos2val === pos3val){
      console.log("winner",pos1val);
      showwinner(pos1val);
    }
   }
}}



newmsgbtn.addEventListener("click", resbtn);
resetbtn.addEventListener("click", resbtn);
