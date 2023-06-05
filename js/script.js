let navbar = document.querySelector('.header .navbar');
const name1 = document.getElementById('#name');
const number = document.getElementById('#number');
const email = document.getElementById('#email');
const message = document.getElementById('#message');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

let mainVid = document.querySelector('.main-video');

document.querySelectorAll('.course-3 .box .video video').forEach(vid =>{

    vid.onclick = () =>{
        let src = vid.getAttribute('src');
        mainVid.classList.add('active');
        mainVid.querySelector('video').src = src;
    }

});

document.querySelector('#close-vid').onclick = () =>{
    mainVid.classList.remove('active');
}

console.log('nitin','1234','adityajadhav077@gmail.com','hello');