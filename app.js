// let btn=document.querySelecto("button");//only one button
// console.dir(btn);

// btn.onclick=function(){
//     console.log("button was clicked");
    
// };

//OR

// function sayHello(){
//     alert("hello");

// }
// btn.onclick=sayHello;


// let btns=document.querySelectorAll("button");
// for(btn of btns){
//     btn.onclick=sayHello;  //onclick event
//     btn.onmouseenter=function (){  //onmouseenter event
//         console.log("you entered a button");
        
//     };
//     console.dir(btn);

// }
// function sayHello(){
//     alert("hello!");
// }




// EVENT LISTENER PROPERTY
let btns=document.querySelectorAll("button");
for(btn of btns){
//     btn.onclick=sayHello;
//     btn.onclick=sayName;
// 

// btn.addEventListener("click",sayHello);   //eventlistener
// btn.addEventListener("click",sayName);
btn.addEventListener("dbclick", function(){
    console.log("you double clicked me");
    
});

}
function sayHello(){
       alert("hello!");
     }
     function sayName(){
            alert("hii roshani!");
         }




