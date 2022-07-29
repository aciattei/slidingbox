const imgs = document.querySelector('.slides');
const img = document.querySelectorAll("#images img");

let i = 0;

function sliding() {
    i++;

    if(i > img.length - 1) {
        i = 0;
    }

    imgs.style.transform = `translateX(${-i*800}px)`;

}

setInterval(sliding, 2000);