const dayTabs = document.querySelectorAll(".day-tab");
let currentTab = document.querySelector(".day-tab.current");
let scrollHint = document.querySelector(".calendar-scroll-hint");

dayTabs.forEach((tab)=>{
	tab.addEventListener("click", ()=>{
		dayTabs.forEach((el)=>{
			el.classList.remove("current");
		});
		tab.classList.add("current");
		currentTab = tab;
	});
});

function loop(){
	let tabRect = currentTab.getBoundingClientRect();
	if(tabRect.x+tabRect.width > scrollHint.offsetLeft){
		scrollHint.style.opacity = 0;
	}else{
		scrollHint.style.opacity = 1;
	}
	requestAnimationFrame(()=>{
		loop()
	});
}

loop();