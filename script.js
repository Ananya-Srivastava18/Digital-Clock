const setCLock = () =>{
  const today = new Date();

const {hours , minutes , seconds, period} = fromatTime(today);

document.querySelector('.hours').textContent = hours;

document.querySelector('.minutes').textContent = minutes;

document.querySelector('.seconds').textContent = seconds;

document.querySelector('.period').textContent = period; 

document.querySelector('.date').textContent = formatDate(today);

};

const fromatTime =(todayDate) =>{

  let hours =  todayDate.getHours();
  let minutes =  todayDate.getMinutes();
  let seconds = todayDate.getSeconds();
  let period  = hours>=12 ? 'PM' : 'AM';


  hours =  hours>12 ? hours%12 : hours;

  hours = hours<10 ? `0${hours}` : hours;


  minutes = minutes<10 ? `0${minutes}` : minutes;

  seconds = seconds<10 ? `0${seconds}` : seconds;


  return {hours, minutes , seconds , period};

};

const formatDate = (today)=>{
  
  const date =  today.getDate();
  const year = today.getFullYear();
  const day = today.toLocaleString('default' ,{weekday:"long"});
  const month = today.toLocaleString('default' ,{month:"short"});

return `${date} / ${month} / ${year}  ,  ${day}`
}
setCLock();
setInterval(setCLock,1000);