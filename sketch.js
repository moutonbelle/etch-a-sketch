// grid.replaceChildren();

const MAX_GRID_WIDTH = 960;
const grid = document.querySelector("#grid");
grid.style.maxWidth = MAX_GRID_WIDTH + "px";

function createGrid (grid, cols) {      
    let divSize = Math.floor(MAX_GRID_WIDTH / cols);    
    
    // Create the divs
    for(let i = 0; i < cols * cols; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("cell");
        newDiv.style.height = divSize + "px";
        newDiv.style.width = divSize + "px";
        if (i % 16 === 0) newDiv.style.backgroundColor = "red";
        grid.appendChild(newDiv);
    }
}

createGrid(grid, 16);