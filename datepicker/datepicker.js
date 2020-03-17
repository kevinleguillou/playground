let pointer = document.querySelector(".pointer");
let pointerPosition = getElementCenter(pointer);
let datepicker = document.querySelector(".datepicker");
let dateEntries = document.querySelectorAll(".datepicker .date-entry");
let currentDate = document.querySelector(".date-entry.current");
let offset = 0;

function getElementCenter(element){
	let boundingRect = element.getBoundingClientRect();
	let center = boundingRect.x + boundingRect.width/2;
	return center;
}

function getClosestItem(){
	let closest = dateEntries[0];
	let lastItemDistance = Math.abs(pointerPosition - Math.abs(getElementCenter(closest)));
	dateEntries.forEach((entry)=>{
		let distance = Math.abs(pointerPosition - Math.abs(getElementCenter(entry)));
		if(distance < lastItemDistance){
			closest = entry;
			lastItemDistance = distance;
		}
	});
	return closest;
}

function centerOnItem(item){
	offset = pointerPosition - getElementCenter(item);
	datepicker.style.transform = `translateX(${offset}px)`;
}

let dragEvent = new DragEvent(datepicker);
dragEvent.onDragStart = ()=>{
	datepicker.classList.add("is-moving");
}
dragEvent.onDrag = (drag, event)=>{
	dateEntries.forEach((entry)=>{ entry.classList.remove("current"); });
	getClosestItem().classList.add("current");
	datepicker.style.transform = `translateX(${offset+drag.delta}px)`;
}
dragEvent.onDragEnd = (drag, event)=>{
	datepicker.classList.remove("is-moving");
	offset = (offset+drag.delta) + (pointerPosition - getElementCenter(getClosestItem()));
	datepicker.style.transform = `translateX(${offset}px)`;
}

centerOnItem(currentDate);