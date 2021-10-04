const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

function rotateValue(x) {
    const multiple = 30;
    let value = 30 * x;
    return `rotate(${value}deg)`;
}


for(let i=1; i <document.querySelectorAll(".number").length ; i++) {
    document.querySelectorAll(".number")[i].style.transform = rotateValue(i);
}

function currentTime() {
    let today = new Date();
    secondHand.style.transform = rotateValue(today.getSeconds() / 5);
    minuteHand.style.transform = rotateValue(today.getMinutes() / 5);
    const calcHour = (today.getHours() % 12) + ((Math.floor(today.getMinutes() / 12) * 2) / 10);
    hourHand.style.transform = rotateValue(calcHour);
}

let dynamicTime = setInterval(currentTime, 1000);