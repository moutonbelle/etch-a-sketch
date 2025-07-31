const MAX_GRID_WIDTH = 960;
const grid = document.querySelector("#grid");
grid.style.maxWidth = MAX_GRID_WIDTH + "px";

function random (maxInt) {
    return Math.floor(Math.random() * maxInt) + 1;
}

function createGrid (grid, cols) {      
    grid.replaceChildren();
    
    let divSize = Math.floor(MAX_GRID_WIDTH / cols);    
    
    // Create the divs
    for(let i = 0; i < cols * cols; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("cell");
        newDiv.style.height = divSize + "px";
        newDiv.style.width = divSize + "px";
        grid.appendChild(newDiv);
    }

    grid.addEventListener("mouseover", (e) => {
        if(e.target.classList.contains("cell")) {
            e.target.style.backgroundColor = `rgb(${random(255)},${random(255)},${random(255)})`;
            if (e.target.style.opacity < 1) e.target.style.opacity = Number(e.target.style.opacity) + 0.1;
        }
    });
}

createGrid(grid, 16);

document.querySelector("#newGrid").addEventListener("click", () => {
    let cols = prompt("How many columns should the grid have? Enter a number <= 100.");
    while (cols < 1 || cols > 100) cols = prompt("Invalid entry. How many columns should the grid have? Enter a number <= 100.");
    createGrid(grid, cols);
});