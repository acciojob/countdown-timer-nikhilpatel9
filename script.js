// Your script here.
const inpt=document.getElementById("userInput");
const start=document.getElementById("start");
const count=document.getElementById("countDown");
const end=document.getElementById("endTime");
start.addEventListener("click",()=>{
	const date=new Date();
	const time=parseInt(inpt.value);
	let sec = 60 * time;
const timer = setInterval(() => {
  const hour = Math.floor(sec / 3600);
  const minutes = Math.floor((sec % 3600) / 60);
  const seconds = sec % 60;

  if (sec <= 0) {
    clearInterval(timer);
  }

  count.textContent = `${hour} Hours:${minutes} Minutes:${seconds} Seconds`;
  sec--;
}, 1000);

	
	const updated = new Date(date);
	
	updated.setMinutes(updated.getMinutes() + time);
	end.textContent=updated.toLocaleTimeString('en-IN', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true
});
	
})