class DragEvent{
	constructor(element){
		this.startPosition = 0;
		this.delta = 0;

		this.onDragStart = null;
		this.onDrag = null;
		this.onDragEnd = null;

		element.addEventListener("touchstart", (event)=>{
			this.startPosition = event.touches[0].clientX;
			this.delta = 0;
			this.onDragStartHandler(event);
		});
		element.addEventListener("touchmove", (event)=>{
			this.delta = (event.touches[0].clientX - this.startPosition);
			this.onDragHandler(event);
		});
		element.addEventListener("touchend", (event)=>{
			this.onDragEndHandler(event);
		});
	}
	onDragStartHandler(event){
		if(typeof(this.onDragStart) == "function") this.onDragStart(this, event);
	}
	onDragHandler(event){
		if(typeof(this.onDrag) == "function") this.onDrag(this, event);
	}
	onDragEndHandler(event){
		if(typeof(this.onDragEnd) == "function") this.onDragEnd(this, event);
	}
}