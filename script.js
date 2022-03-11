

const container = document.querySelector('.container');
container.style.display = 'flex';
container.style.flex = '1, 0, auto'
container.style.flexDirection = 'column';
container.style.height = '900px';
container.style.width = '800px';
container.style.justifyContent = 'flex-start';
container.style.alignItems = 'center'

const title = document.createElement('h1');
container.appendChild(title);
title.textContent = 'Sketch Box'
title.style.fontStyle = 'italic'
title.display = 'flex';
title.flex = '1';
title.style.color = '#90BCDF'

const textBox = document.createElement('div');
container.appendChild(textBox);
textBox.textContent = 'Click \"New Canvas\" to reset or choose a new canvas size. Choose up to 100 pixels for the width and height of the new canvas.'
textBox.display = 'flex';
textBox.flex = '1';
textBox.style.padding = '10px'
textBox.style.width = '600px'
textBox.style.alignItems = 'center'

const gridBox = document.createElement('gridBox');
container.appendChild(gridBox);
gridBox.style.display = 'flex';
gridBox.style.flexDirection = 'column';
gridBox.style.flex = '1, 0, auto';
gridBox.style.height = '600px';
gridBox.style.width = '600px';
gridBox.style.borderStyle = 'solid'
gridBox.style.borderWidth = '3px'
gridBox.style.borderColor = '#2A628F'
gridBox.style.padding = '2px'
gridBox.style.margin = '10px'

grid(); 
function grid(size = 16) {
    for (i = 0; i < size; i++) {    
        let row = document.createElement('div');
        gridBox.appendChild(row)    
        row.className = 'row'
        row.style.display = 'flex';
        row.style.flex = '1, 0, auto';
        row.style.flexDirection = 'row';
        row.style.height = '100%';
        row.style.width = '100%'
        row.style.justifyContent = 'center';
        row.style.alignItems = 'center'
        for (n = 0; n < size; n++) {
            let pixel = document.createElement('div');
            row.appendChild(pixel);
            pixel.className = 'pixel'
            pixel.style.display = 'flex'
            pixel.style.backgroundColor = 'black';
            pixel.style.height = '100%';
            pixel.style.width = '100%';
            pixel.style.flex = '1, 0, auto';
            pixel.style.justifyContent = 'center';
            pixel.style.alignItems = 'center';
        }
    };
};

function draw () {
    let pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = '#'+(Math.random().toString(16)+'00000').slice(2,8)
        })
    });
};
draw();

const button = document.createElement('button');
container.appendChild(button);
button.textContent = 'New Canvas';
button.style.margin = '24px'
button.style.fontWeight = '700';
button.style.paddingTop = '.5em'
button.style.paddingBottom = '.5em'
button.style.paddingLeft = '1em'
button.style.paddingRight = '1em'
button.style.borderRadius = '8px'
button.style.backgroundColor = '#3E92CC'
button.style.borderStyle = 'none'
// button.style.borderColor = '#2A628F'
button.style.fontSize = '16px'
button.style.color = '#DFEDF6'
button.style.textShadow = '1px 1px 0 #500'

button.addEventListener('click', () => {
    gridBox.style.backgroundColor = 'black';
    while (gridBox.firstChild) {
        gridBox.removeChild(gridBox.lastChild);}
    let newSize = prompt('How many pixels wide do you want your grid?')
    console.log(newSize)
    console.log(typeof newSize)
    if (newSize != null && newSize <= 100 && newSize >0) {
        grid(newSize)
    } else {
        grid();
    }
    draw();
});  

