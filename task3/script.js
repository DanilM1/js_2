const trafficLightEl = document.querySelector('#trafficLight');

const green = document.querySelector('#green');
const yellow = document.querySelector('#yellow');
const red = document.querySelector('#red');
var i = 0, ii = 0, iii = 0;

function makeGreen() {
    trafficLightEl.style.background = 'green';
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
}

function makeYellow() {
    trafficLightEl.style.background = 'yellow';
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLightEl.style.background = 'red';
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
}

function Green() {
    ii = 0;
    iii = 0;
    if (i === 0) {
        green.style.background = 'green';
        yellow.style.background = 'black';
        red.style.background = 'black';
        i = 1;
    }
    else {
        if (i === 1) {
            Yellow();
            i = 2;
        }
        else {
            Red();
            i = 0;
        }
    }
}

function Yellow() {
    i = 0;
    iii = 0;
    if (ii === 0) {
        green.style.background = 'black';
        yellow.style.background = 'yellow';
        red.style.background = 'black';
        ii = 1;
    }
    else {
        if (ii === 1) {
            Red();
            ii = 2;
        }
        else {
            Green();
            ii = 0;
        }
    }
}

function Red() {
    i = 0;
    ii = 0;
    if (iii === 0) {
        green.style.background = 'black';
        yellow.style.background = 'black';
        red.style.background = 'red';
        iii = 1;
    }
    else {
        if (iii === 1) {
            Green();
            iii = 2;
        }
        else {
            Yellow();
            iii = 0;
        }
    }
}

trafficLightEl.addEventListener('click', makeGreen);

green.addEventListener('click', Green);
yellow.addEventListener('click', Yellow);
red.addEventListener('click', Red);