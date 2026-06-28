window.onload=function(){

loader.style.display="none";

}

// Project Filter

const filterBtns=document.querySelectorAll(".filter-btn");

const projects=document.querySelectorAll(".project-item");

filterBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

filterBtns.forEach(b=>{

b.classList.remove("btn-primary");

b.classList.add("btn-outline-primary");

});

btn.classList.remove("btn-outline-primary");

btn.classList.add("btn-primary");

const filter=btn.dataset.filter;

projects.forEach(project=>{

if(filter==="all"){

project.style.display="block";

}

else if(project.classList.contains(filter)){

project.style.display="block";

}

else{

project.style.display="none";

}

});

});

});

emailjs.init({
    publicKey: "EWDkVQrLjjsljbmOs"
});

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
        "service_keyxpxj",
        "template_8l4y7b8",
        this
    )
    .then(() => {

        alert("Message sent successfully!");
        contactForm.reset();

    })
    .catch((error) => {

        console.error(error);
        alert("Failed to send message.");

    });

});

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};