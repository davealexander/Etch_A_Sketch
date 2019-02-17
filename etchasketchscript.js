const createBtn = document.getElementById('Create');
const resetBtn = document.getElementById('Reset');

createGrid(4);
initEventListeners();
initButtons();

//function that creates grid
function createGrid(squares){
    const grid = document.querySelector('.grid');
    const gridStyle = grid.style;
    gridStyle.gridTemplateColumns = "repeat(" + squares + ", auto)";
    gridStyle.gridTemplateRows = "repeat(" + squares + ", auto)";
    let total = squares * squares;
    for(let i = 0; i < total; i++){
        const div = document.createElement('div');
        div.classList.add('item');
        grid.appendChild(div);
	}
};
//function that resets color of grid to white
function resetGrid(){
	const items = document.querySelectorAll(".item");
	items.forEach((item)=>{
		const style = item.style;
		style.backgroundColor = "white";
	});
}

//function that updates grid to prompted amount of squares
function updateGrid(){
	let update = prompt("How many squares per side?");
	removeItemListeners();
	resetGrid();
	removeGrid();
	createGrid(update);
	initEventListeners();
}

//removes children from node
function removeGrid(){
	const grid = document.querySelector('.grid');
	while (grid.hasChildNodes()){
		grid.removeChild(grid.firstChild);
	}	
}
//Randomly Changes color of boxes
function changeItemColor(e) {
    let hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' +
        (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256))
        + ')';
    let randomColor = e.target;
    randomColor.style.opacity = '1';
    randomColor.style.background = hue;
};

//Event listener that changes box color
function initEventListeners(){
	const items = document.querySelectorAll(".item");
	items.forEach((item)=>{
		item.addEventListener('mouseenter', changeItemColor);
	});		
};
//adds event listener to buttons to update/reset grid
function initButtons(){
    const createBtn = document.getElementById('Create');
        createBtn.addEventListener('click',updateGrid);
    const resetBtn = document.getElementById('Reset');
        resetBtn.addEventListener('click',resetGrid);
};
//ties back to updateGrid to remove changeItemColor listenr
function removeItemListeners(){
	const items = document.querySelectorAll(".item");
	items.forEach((item)=>{
		item.removeEventListener('mouseenter', changeItemColor);
	});
};
