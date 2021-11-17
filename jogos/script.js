// Baseado no vídeo do Filipe Deschamps: https://www.youtube.com/watch?v=dW08ABBu2SY    

// BOLA PRETA
var imgBlack = document.getElementById("imgBlack");

var x = 0;
var xDirection = 1;
var xSpeed = 10;

function animateImgBlack() {
    x += xDirection * xSpeed;
    if (x > window.innerWidth - 100) {
        xDirection = -1;
    }
    if (x <= 0) {
        xDirection = 1;
    }
    imgBlack.style.left = x + 'px';

    window.requestAnimationFrame(animateImgBlack);
}
animateImgBlack();

// BOLA VERMELHA
var imgRed = document.getElementById("imgRed");

var redX = Math.random() * (window.innerWidth - imgRed.offsetWidth);
var redY = Math.random() * (window.innerHeight - imgRed.offsetHeight);
var redXdirection = 1;
var redYdirection = 1;
var redXspeed = xSpeed * Math.random() * 2.5;
var redYspeed = xSpeed * Math.random() * 2.5;

function animateImgRed() {
    redX += redXdirection * redXspeed;
    redY += redYdirection * redYspeed;
    if (redX > window.innerWidth - imgRed.offsetWidth) {
        redXdirection = -1;
    }
    if (redX < 0) {
        redXdirection = 1;
    }
    if (redY > window.innerHeight - imgRed.offsetHeight) {
        redYdirection = -1;
    }
    if (redY < 0) {
        redYdirection = 1;
    }
    imgRed.style.left = redX + 'px';
    imgRed.style.top = redY + 'px';

    window.requestAnimationFrame(animateImgRed);
}
animateImgRed();

// BARRAS LATERAIS
var imgBar1 = document.getElementById("imgBar1");
var imgBar2 = document.getElementById("imgBar2");

function animateBars() {
    imgBar1.style.top = redY + 40 + 'px';
    imgBar2.style.top = redY + 40 + 'px';

    window.requestAnimationFrame(animateBars);
}
animateBars();