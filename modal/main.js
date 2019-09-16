var close = document.getElementById('close')
close.addEventListener('click', hide);
close.addEventListener('click',showMe);
var button = document.getElementById('button')
button.addEventListener('click', show);
var button = document.getElementById('button')
button.addEventListener('click', goAway);
var modal = document.getElementById('wrapper');


function hide(){
    modal.style.display = 'none';
}

function show(){
    modal.style.display = 'block';
}

function goAway(){
    button.style.display = 'none';
}

function showMe(){
    button.style.display = 'inline-block'
}


