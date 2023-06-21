const grid = document.querySelector(".grid");
const reset = document.querySelector('#reset');
const slider = document.querySelector('#slider')
const screenVal = document.querySelector('.value');
let cell = grid.children;

function createGrid() {
  for (let i = 0; i <= 255; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "cell";
    newDiv.addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = "black";
    });
    grid.appendChild(newDiv);
  }
};

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

slider.addEventListener('input', function(){
    let val = document.getElementById('slider').value;
    screenVal.textContent = val;
    removeAllChildNodes(grid);
    grid.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`);
    for (let i = 0; i < val*val; i++) {
        const newDiv = document.createElement("div");
        newDiv.className = "cell";
        newDiv.addEventListener("mouseover", function (event) {
          event.target.style.backgroundColor = "black";
        });
        grid.appendChild(newDiv);
    }
});

reset.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    for (let i = 0; i < val*val; i++) {
        cell[i].style.backgroundColor = 'white';
    }
});

createGrid();