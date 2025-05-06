const newDiv = document.createElement("div");
let container = document.querySelector('.container');
let button = document.querySelector('button');
let input = document.querySelector('#inputRange');
let value = document.querySelector('#value');
let resetButton = document.querySelector('#resetButton');


function createRow() {
    const gridSizeChoice = input.value * input.value;
    const gridHeight = 960 / input.value;
    
    
    for(let i = 0; i < gridSizeChoice; i++) {
        
        const newDiv = document.createElement("div");
        newDiv.classList.add('sketch')
        container.appendChild(newDiv)
        newDiv.style.height = `${(parseInt(gridHeight))}px`;
        newDiv.style.width = `${(parseInt(gridHeight))}px`;
        newDiv.addEventListener('mouseover', () => {
            newDiv.style.backgroundColor= "black";
        })
    }
    
}



button.addEventListener('click', () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
} 
    createRow()
})












