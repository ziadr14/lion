let burger = document.querySelector('.burger');
let links = document.querySelector('.links');

burger.onclick = ()=> {
    links.classList.toggle('active')
}

let btn = document.getElementById("scrool-icon");

window.onscroll = ()=> {
    if (scrollY >= 400) {
        btn.style.display = "block";
    }else {
        btn.style.display = "none";
    }
}

btn.onclick = ()=> {
    scroll({
        left:0,
        top:0,
        behavior:"smooth",
    })
}
