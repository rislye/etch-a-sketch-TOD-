let container = document.querySelector('.container');
let button = document.querySelector('button');
let input = document.querySelector('#inputRange');
let value = document.querySelector('.value');
let resetButton = document.querySelector('#resetButton');
let rainbow = document.querySelector('.rainbow');
let black = document.querySelector('.black');

function randomRgbaString (alpha) {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let a = alpha
    return `rgba(${r},${g},${b},${a})`
}

// input range display value
value.textContent = `GRID : ${input.value}x${input.value}`
input.addEventListener('click', () => {
    value.textContent = `GRID : ${input.value}x${input.value}`
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    } 
createRow()
})

function createRow() {
    const gridSizeChoice = input.value * input.value;
    const gridHeight = 960 / input.value;
    for(let i = 0; i < gridSizeChoice; i++) {
        const newDiv = document.createElement("div");
        container.appendChild(newDiv);
        newDiv.classList.add('sketch');
        newDiv.style.height = `${(parseInt(gridHeight))}px`;
        newDiv.style.width = `${(parseInt(gridHeight))}px`;
            rainbow.addEventListener('click', () => {
            newDiv.addEventListener('mouseover', () => {
                newDiv.style.backgroundColor= randomRgbaString(1);  
            })
            })
            black.addEventListener('click', () => {
                newDiv.addEventListener('mouseover', () => {
                    newDiv.style.backgroundColor= 'black';   
                })
                })
    }
}