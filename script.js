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

  count.textContent = `${String(hour).padStart(2,"0")}:${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
  sec--;
}, 1000);

	
	const updated = new Date(date);
	
	updated.setMinutes(updated.getMinutes() + time);
	end.textContent=updated.toLocaleTimeString();
	
})