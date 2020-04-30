let prevScrollpos = window.pageYOffset;
let navbar = document.querySelector("nav");

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if(prevScrollpos>currentScrollPos){
        navbar.style.top ="0";
    }
        else{
            navbar.style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
    }

let backImg = document.querySelector("#background-img");
let  aboutHeader = document.querySelector("#about-header");

backImg.onmouseover = function() {
    aboutHeader.removeAttribute("id");
    aboutHeader.setAttribute("id","about-header2");
    
    
}
backImg.onmouseout = function(){
    aboutHeader.setAttribute("id","about-header");

}

let newTop = document.querySelector("#top");
let mainImg = document.querySelector("#main-pic img");


newTop.onmouseover = function() {
    mainImg.removeAttribute("src");
    mainImg.setAttribute("src","superman2.png");
    mainImg.style.width="70%";
}
newTop.onmouseout = function(){
    mainImg.setAttribute("src","superman.png");
    mainImg.style.width="80%";

}