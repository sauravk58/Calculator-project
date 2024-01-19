let input=document.getElementById('inputbox');
let buttons=document.querySelectorAll('button');//it will give me all buttons

let string ="";//to store my ans .
//now we have to make a array of buttons bcz we have to run loop on each buttons but loop run on array thats
//why we have to make array of buttons and use foreach loop.
let arr=Array.from(buttons);
arr.forEach(button =>{ //we can also use call back function but we are using arrow function.
    button.addEventListener('click',(e)=>{//on click we pass e then we check e.target.innerHTML will store
        // the value of innerHTML and we compare it with = sign if yes then we have to show output
        if(e.target.innerHTML=='='){
            string= eval(string); //eval is inbuilt function which is used to evaluate the string.
            input.value=string; //now i will show output 
        }
        else if(e.target.innerHTML=='AC'){
            string=" ";
            input.value=0;
        }
        else if(e.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1);//i used substring to remove last value.
            input.value=string; 
        }
        else{
            //if i am not pressing equal btn 
        string+=e.target.innerHTML;//then i will store all numbers and operator.
        input.value=string;// here i will show in input what button i am pressing.
        }
        
    })
})