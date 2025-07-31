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
        grid.appendChild(newDiv);
    }
}

createGrid(grid, 16);

grid.addEventListener("mouseover", (e) => {
    if(e.target.classList.contains("cell")) e.target.style.backgroundColor = "black";
});