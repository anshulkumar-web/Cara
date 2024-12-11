
let navBtn = document.getElementById("bar");
let nav = document.getElementById('nav');
let close = document.getElementById('close');

navBtn.addEventListener(('click'), function(){

    nav.style.right = 0;
})

close.addEventListener(('click'), function() {

    nav.style.right = '-300px';
})