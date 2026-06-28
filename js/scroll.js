window.onscroll=()=>{

let scroll=

document.documentElement.scrollTop;

let height=

document.documentElement.scrollHeight-

document.documentElement.clientHeight;

let scrolled=

(scroll/height)*100;

document.getElementById("progressBar").style.width=

scrolled+"%";

}