const container = document.querySelector('.container');
const button = document.querySelector('button');
const input = document.querySelector('#inputRange');
const value = document.querySelector('.value');
const resetButton = document.querySelector('#resetButton');
const rainbow = document.querySelector('.rainbow');
const black = document.querySelector('.black');

function randomRgbaString (a) {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
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
    const gridHeight = 960 / input.value - 2;
    for(let i = 0; i < gridSizeChoice; i++) {
        const newDiv = document.createElement("div");
        container.appendChild(newDiv);
        newDiv.classList.add('sketch');
        newDiv.style.height = `${(parseInt(gridHeight))}px`;
        newDiv.style.width = `${(parseInt(gridHeight))}px`;
        newDiv.style.border = "1px solid rgb(0, 0, 0)";
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
createRow()