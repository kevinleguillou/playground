const dayTabs = document.querySelectorAll(".day-tab");

dayTabs.forEach((tab)=>{
	tab.addEventListener("click", ()=>{
		dayTabs.forEach((el)=>{
			el.classList.remove("current");
		});
		tab.classList.add("current");
	});
});