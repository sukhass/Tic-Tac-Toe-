
 /*const profile={
    username :   "sharda khapra",
      isfollow : true ,
     post : 195 ,
      followers : 596 ,
 } 

console.log("HEELO WORLD"
);*/
  /*
     let a =5;
     let b =2;
     let c = a+b ;
     console.log("a+b",c);
     console.log("a-b", a-b);
     console.log("a*b", a*b);
     console.log("a/b", a/b);
     console.log("a=",a, "& b=" ,b); 
     console.log("a%b", a%b);
console.log("a**b", a**b);*/



/* uanaryoprater
let a =5;
let b =2;
console.log("a =",a , "b =",b);
a--;
 a++;
b=b+5;
console.log(a);
console.log(b); */

/*let a =5 ;
let b =3 ;

console .log ("a =", a , "b =" , b);
/*console.log( "a++", a++);*/
/*console.log("a",a);
console.log("--a",--a);*/

/**asisgnment opraterters */
/*
let a = 5 ;
let b = 2 ;
a **= 4;
console.log ("a = " , a);*/


/* comparison opratertse
*/
/* let a = 5 ;//numbers
 let b = 5;//strings
 console.log("a<=b" , a<=b);*/

 /* logical oprateers 
let a = 5;
let b = 8;
 
console.log (" comand && comand2", a> b , !a===5); */

/*conditionale statement ; */

/*let age = 25 ;
if (age<18){
  console.log(
    " you can vote"
  );
}
if (age > 18) {
  console.log( "you cannot vote");
}*/
/*
let mode = "dark";
let color;
if (mode === " dark"){
  color= " black";

}
else{ 
  color= " badrang main satranga hai isqu re ";
}
console.log (color);*/
/*let num = 21;
if (num % 7 ===0){
  console.log(num,"is even");
}
else {
  console.log("is odd");
}
*/

/*syntax-> else-if statement 
let mode = "pidarknk";
let color ;
if (mode ==="dark") {
  color = " black";
}else if (mode=== "blue"){
  color ="blue"; 
}else if(mode==="pink"){
  color="pink";
}else{
  color="white";
}console.log(color);


if(mode==="dark") console.log(mode);*
let age =15 ;

let result = age<=18 ?console.log("adult"):console.log("not adult");

let num = prompt("enter the number:");
if (
  num%3 ===0 
){
 console.log(num, "is multple of 3");
}
else { 
  console.log(num,"is not multiple of 3");
}*/

/*let score  = prompt("enter your score then result") ;

let grade ;
if (score>=90 && score<=100)
{
  grade ="A";
}
else if (score>=70 && score<=89){
  grade = "B";
}
else if ( score>= 60 && score<=69){
  grade ="C";
}
else if(score>50 && score<=59 ){
  grade ="D";
}
else if (score>=0 && score <=49){
  grade = "f";
}
console.log (" acording to your scores, your grade was :", grade ) */
/*let i = "apna collage";
for (let i = 1; i<=1000;i ++){
  console.log("apna collage");

  
} 

let sum = 0 ;
for (let i = 1; i <= 5 ; i++)
sum = sum+i ;
console. log (" sum =" , sum );


while loop 
let i = 1 ;

while ( i <=8)
{
  console.log ( "apna collage");
i++;  ss
}

//do while loop 
let i = 1 ;
do { 
  console.log( "apna collage " );
  i++;
}
while(i <=15 );

// for of loop 
//str , arrays 
let str = " parwinder singh collage";
let size = 0 ;
for ( let i of str)// itirater opreaters
{console. log (" i = ", i);
 size++;
} 
console.log(" string size =", size);


// for in loop 
let student = {
  name : "rahul kumar",
  age : 24 ,
  cgpa: 7.4 ,
  ispass: true , 
};
for (let i in student){
  console.log( "key =", i ," value=" , student[i]);
}

/ /qustion

for (let num = 0 ;
  num <=70 ;
  num++
  )
  if (num %7===0)
  {console.log("num =", num )
}

  
// qustion 2 

let gamenum = 25;

let usernum= prompt (" guess the game number :");
while (usernum  != gamenum){  usernum= prompt( " you are entered wrong num , guess again :");
}
console.log ("congress, your enter the right number");

let str = " apna collage";
let str2 ="sukhwinder singh ";
console.log(str2[5]);

//template lerteral //


let obj ={
  item : " pen ",
  price : 10 ,
};
console.log (" the cost of pen ", obj.item , "is", obj.price , "rupees");
let obj ={
  item : " pen ",
  price : 10 ,
}; 
let output = `the cost of ${obj.item} is ${obj.price}rupees`;
console.log ( output);


let spacialstr = ` this is a template literal ${1+2+3} `;
console.log ( spacialstr );

////escape////

console.log ("apna \n collage");
console.log ("apna \t collage");

///strings method////

let str ="APNA collage";
let newstr = str.toLowerCase();    or  let newstr = str.toupperCase();
console.log(str);
console.log(newstr);*/

/*let str = " apna collage   js  " ;
console.log(str.trim()); */

/*let str = "hello";
console.log(str.slice(1,5));

let str1 = " apna ";
let str2 = "collage";
let res = str1 .concat(str2);  or let res =(str1 + str2);
console.log (res);
let str = " hello";
console.log( str.replace("o", "m"));
let str = "i love js ";
console.log (str.charAt(4));      i love js
                                  0 1234 56 
 
let username =prompt( "enter your name "  );
let name = ( "@"+username + username.length)
console.log (name);                               


//arrays []
//
let marks= {//
       student : "sukhwinder singh",//
       age :24,//
       cgpa :0.5 ,//
       inclass: true , //
}//
//
console.log(marks);
let hero =["ironman", "superman" ," spiderman", "batman"];
let marks = [58,78,45,65];
console.log( hero);
console.log( marks[0]);

let marks = [58,78,45,65];
for (let i = 0; i < marks.length; i++){
console.log (marks[i]);
}*/

//let cities= [ "delhi" , "pune", "ludhiana", "patiala" ] ;
//  for (let city of cities){
//  console.log (city); 
//  console.log (city.toUpperCase());
//}
 
// let marks =[ 85, 97 ,44 , 37 ,76 ,60 ];
// let sum = 0 ;
// for (let val of marks){
//  sum = val ;
// }
// let avg = sum / marks.length;
//
// console.log(`avg marks of class = ${avg}`);

//let item = [ 250,645 ,300, 900,50];
//
////let i = 0 ;
//
////for (let val of item ){
////  let offer = val / 10 ;
////  item(i)= item[i]-offer ;
////console.log(`value of offer  = ${item[i]}`);
////  
////}
//for ( let i = 0 ; i < item.length; i++ ){
//  let offer = item [i]/10;
//  item [i] -= offer;
//
//}console.log("offer " );
//console.log(  item);
//et fooditem =[ 20,55,854,85,85];
//ooditem.toString();
//console.log(fooditem );
//let  Arr=[1,2,3,4,5,6];
// 
// 
//Arr.splice(1,1,101);
//console.log (Arr);

//let company =[ "microsoft", "bloomberg", "uber", "gpggle", "netflix"];
//
//company.splice(2,1,"ola");
//company.push("amazone");
//console.log(company);

// new part 
//
//function myfuction (){
//  console.log("welcome to apna collage")
//}
//myfuction();

//function sum(x,y){
//  console.log(x+y);
//}
//sum (3,2);

//function sum (x,y){
//  s =x+y ;
//  return s;
//}
//
//let val = sum (5,8);
//console.log(val);

//function sum(x,y){ 
//  s = x+y ; 
//console.log(x); 
//return s;  
//} 
//let val = sum(3,4); 
//console .log (val);                   
 
//a =5;
//b=8;
//const arro =(a,b) => {
//  console.log (a*b);
//}
//
//
//const all=()=>{
//  console.log("hello");
//};

//function count(str)
//{ let count = 0;
//  for (const char of str){
//    if(char==="a"|| 
//    char==="e"||
//     char==="o"||
//      char==="u"||
//       char==="i")
//    
//    {count ++;
//  }
//}console.log(count);
//}


//const count =(str)=>
//{ let count = 0;
//  for (const char of str){
//    if(char==="a"|| 
//    char==="e"||
//     char==="o"||
//      char==="u"||
//       char==="i")
//    
//    {count ++;
//  }
//}console.log(count);
//}

//let fuc = ["pune", "delhi", "bangladesh"];
//
//fuc.forEach((val,i,fuc) =>
//{
//
//  console.log(val.toUpperCase(),i,fuc);
//})
/*
let arr =[1,5,8,2,3];
//

//
arr .forEach((num) => {
//
  console.log(num*num);
//
});*/

//let num = [55,58,65];
//
//let newarr =num.map((val)=>{
// return val*2;
//}
//);console.log(newarr);

//
//let arr = [1,2,3,4,5,6];
//let newarr = arr.filter((val)=>{
//  return val<3;
//});console.log(newarr);
//
//
//let arr = [1,2,3,5,4];
//let even =arr.filter((val)=>
//{return val %2 !==0;
//})
//console.log(evren);


//et arr = [1,2,543,4,5];
//onst output = arr.reduce((pre,cur) =>
//
// return pre>cur ? pre :cur ; 
//)
//onsole.log(output);
//let marks = [97,58,85,95,75,85];
//let newarr = marks.filter( (val)=>
// 
//{return val > 90;
//
//})
//console.log(newarr);

//et n = prompt("enter the number :");
//et arr =[];
//
//or (let i = 1 ; i <= n ; i++){
// arr [i-1]=i;
//console.log(arr);
//
//et sum = arr.reduce((res ,last )=>
//return res *last ;
//);console.log("sum : " ,sum );

 //console.dir(document.body );

//let sukh = document.getElementById("bod1");
//console.dir(sukh);
//  
//
//let sukh1=document.getElementsByClassName("bod2");
//console.dir(sukh1);
//
// 
//let sukh12=document.getElementsByTagName("h1");
//console.dir(sukh12);
//
//
//let elements=document.querySelector("h1");
//console.dir(elements);
//
//
//
//let element=document.querySelectorAll(".bod2");
//console.dir(element);
//const nodeList = document.body.childNodes;
 

//t div =document.querySelector("div");
//nsole.dir(div);
//
//t heading =document.querySelector("h3");
//nsole.dir(heading);

//let h2= document.querySelector("h2");
//console.dir(h2.innerText);

//h2.innerText=h2.innerText + " apna collage students";

//let divs= document.querySelectorAll(".box");
// let i=1;
//for (div of divs) {
//  console.log(div.innerText);
//  div.innerText = `parwinder singh ${i} `;
//  i++;
// }
//
// let div=document.querySelector("p");
////console.log(div.setAttribute("name","newclass"));  
// 
//div.style.backgroundColor="red";
//
//div.style.visibility="hidden";

//t newbtn = document.createElement("button");
//wbtn.innerText = "treders";
//nsole.dir(newbtn);
//
//
//t div = document.querySelector("p");
//v.after(newbtn);
//
// fragment = document.createDocumentFragment();
// li = fragment 
//appendChild(document.createElement("section"))
//appendChild(document.createElement("ul"))
//appendChild(document.createElement("li"));
//textContent = "hello world";
//
//ument.body.appendChild(fragment);
//et singh = document.querySelector("p");
//singh.prepend(heading);


 //let btn = document.createElement("button");
 //btn.innerText= "click me ";

 //btn.style.backgroundColor="red" ;
 //btn.style.color="white" ;
 //document.body.appendChild(btn);

 //document.querySelector("body").prepend(btn);

 //let para=document.querySelector("p");
 ////para .classList.add =("newclass");

//let btn1= document.querySelector("#btn1");
//
//let btn2= document.querySelector("#btn2");
//btn1.onmouseover = (m) => {
//  console.log(m);
//  console.log(m.target);
//  console.log(m.type);
//  let a = 25 ;
//  a++ ;
//  console.log (a);//
//}

//tn1.addEventListener("click", () => {
// console.log("event");
//);
//
//tn2.addEventListener("click", () => {
// console.log("event -handler51");
//);
//
//tn2.addEventListener("click", () => {
// console.log("event -handler1");
//);
//
//
//onst badal =()=> {
// console.log ("handler3")
//
//
//tn2.addEventListener("click", badal );
//
//tn2.removeEventListener("click",  badal );

//
//
//let mode= document.querySelector("#btn1");
//  let curmode = "light";
//  let body = document.querySelector("body");
//
//  mode.addEventListener("click", () =>  {
//   if
//   ( curmode==="light"){
//    curmode = "dark";
//    body.classList.add("dark");
//    body.classList.remove("light");
//   }else 
//   {curmode = "light";
//body.classList.add("light");
//   body.classList.remove("dark");
//  }
//  
//console.log(curmode);
//  })

  
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