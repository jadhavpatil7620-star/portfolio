const words=[

"Python Full Stack Developer",

"Django Developer",

"Backend Developer",

"Frontend Developer"

];

let i=0;

let j=0;

let current="";

let deleting=false;

function typing(){

current=words[i];

if(!deleting){

document.getElementById("typing").textContent=

current.substring(0,j++);

if(j>current.length){

deleting=true;

setTimeout(typing,1200);

return;

}

}

else{

document.getElementById("typing").textContent=

current.substring(0,j--);

if(j<0){

deleting=false;

i++;

if(i===words.length)i=0;

}

}

setTimeout(typing,deleting?60:120);

}

typing();