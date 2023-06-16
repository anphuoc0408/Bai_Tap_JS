let secondHand = document.querySelector('.second-hand')
let minutesHand = document.querySelector('.min-hand')
let hourshand = document.querySelector('.hour-hand')
function setDate() {
    let now = new Date()
    const offset = 90
    const seconds = now.getSeconds()
    const secondsDegrees = ((360 / 60) * seconds) + offset
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;


    const minutes = now.getMinutes();
    const minutesDegrees = ((360 / 60) * minutes) + offset
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((360 / 12) * hours) + offset
    hourshand.style.transform = `rotate(${hoursDegrees}deg)`;

    

}
setInterval(setDate, 1000)