let touchStart = 0;
let touchDelta = 0;

window.addEventListener("touchstart", (event)=>{
	touchStart = event.touches[0].clientX;
	document.querySelector(".slide-1").classList.add("moving");
	document.querySelector(".slide-2").classList.add("moving");
});

window.addEventListener("touchmove", (event)=>{
	let currentX = event.touches[0].clientX;
	touchDelta = (currentX - touchStart)/window.innerWidth;
	document.querySelector(".slide-1").style.transform = `translateX(${touchDelta*100}%)`;
	document.querySelector(".slide-1 .text").style.transform = `translateX(${touchDelta*50}%)`;
	document.querySelector(".slide-2").style.transform = `translateX(${touchDelta*100}%)`;
	document.querySelector(".slide-2 .text").style.transform = `translateX(${50 + touchDelta*50}%)`;
});

window.addEventListener("touchend", (event)=>{
	document.querySelector(".slide-1").classList.remove("moving");
	document.querySelector(".slide-2").classList.remove("moving");
	if(Math.abs(touchDelta) > 0.5){
		document.querySelector(".slide-1").style.transform = `translateX(-100%)`;
		document.querySelector(".slide-1 .text").style.transform = `translateX(0%)`;
		document.querySelector(".slide-2").style.transform = `translateX(-100%)`;
		document.querySelector(".slide-2 .text").style.transform = `translateX(0%)`;
	}else{
		document.querySelector(".slide-1").style.transform = `translateX(0%)`;
		document.querySelector(".slide-1 .text").style.transform = `translateX(0%)`;
		document.querySelector(".slide-2").style.transform = `translateX(0%)`;
		document.querySelector(".slide-2 .text").style.transform = `translateX(0%)`;
	}
});
