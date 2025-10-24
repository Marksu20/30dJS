const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondsDegrees = ((seconds / 60) * 360);
  const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6);
  const hoursDegrees = (((hours % 12) / 12) * 360) + ((minutes / 60) * 30);

  secondHand.style.transform = `translate(-50%, -100%) rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `translate(-50%, -100%) rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `translate(-50%, -100%) rotate(${hoursDegrees}deg)`;

  console.log(seconds);
}

setInterval(setDate, 1000)