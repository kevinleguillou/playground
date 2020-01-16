let touchStart = 0;
let touchDelta = 0;
let currentOffset = 0;

window.addEventListener("touchstart", (event)=>{
	touchStart = event.touches[0].clientX;
	document.querySelector(".slide-1").classList.add("moving");
	document.querySelector(".slide-2").classList.add("moving");
});

window.addEventListener("touchmove", (event)=>{
	let currentX = event.touches[0].clientX;
	touchDelta = (currentX - touchStart)/window.innerWidth;
	let slides = document.querySelectorAll(".slide");
	slides.forEach((slide, id)=>{
		slide.style.transform = `translateX(${-100*currentOffset + touchDelta*100}%)`;
		if(currentOffset == id)	slide.querySelector(".text").style.transform = `translateX(${touchDelta*50}%)`;
		if(currentOffset < id)	slide.querySelector(".text").style.transform = `translateX(${50 + touchDelta*50}%)`;
		if(currentOffset > id)	slide.querySelector(".text").style.transform = `translateX(${-50 + touchDelta*50}%)`;
	});
});

window.addEventListener("touchend", (event)=>{
	document.querySelector(".slide-1").classList.remove("moving");
	document.querySelector(".slide-2").classList.remove("moving");
	console.log(touchDelta);
	if(Math.abs(touchDelta) > 0.35){
		if(Math.sign(touchDelta)<0){
			if(currentOffset < 1) currentOffset += 1;
		}else{
			if(currentOffset != 0) currentOffset -= 1;
		}
	}
	document.querySelector(".slide-1").style.transform = `translateX(${-100*currentOffset}%)`;
	document.querySelector(".slide-1 .text").style.transform = `translateX(0%)`;
	document.querySelector(".slide-2").style.transform = `translateX(${-100*currentOffset}%)`;
	document.querySelector(".slide-2 .text").style.transform = `translateX(0%)`;
});
