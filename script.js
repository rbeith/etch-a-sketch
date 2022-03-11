

const container = document.querySelector('.container');
container.style.display = 'flex';
container.style.flex = '1, 0, auto'
container.style.flexDirection = 'column';
container.style.height = '600px';
container.style.width = '600px';
container.style.justifyContent = 'flex-start';
container.style.alignItems = 'center'

const button = document.createElement('button');
container.appendChild(button);
button.textContent = 'Reset';
button.style.margin = '24px'

const gridBox = document.createElement('gridBox');
container.appendChild(gridBox);
gridBox.style.display = 'flex';
gridBox.style.flexDirection = 'column';
gridBox.style.flex = '1, 0, auto';
gridBox.style.height = '500px';
gridBox.style.width = '500px';

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
        pixel.addEventListener('pointerover', () => {
            pixel.style.backgroundColor = 'white'
        })
    });
};
draw();

// pixels.forEach((pixel) => {
//     button.addEventListener('click', () => {   
//         pixel.style.backgroundColor = 'black'
//     })
// });

// function remove() {
//     gridBox.removeChild(gridBox.firstChild);
//     };



button.addEventListener('click', () => {
    let pixels = document.querySelectorAll('.pixel')
    pixels.forEach((pixel) => {   
        pixel.style.backgroundColor = 'black'
    })
    while (gridBox.firstChild) {
        gridBox.removeChild(gridBox.lastChild);}
    let newSize = prompt('New grid size?')
    console.log(newSize)
        if (newSize <= 100) {
            grid(newSize)
        } else if (newSize.length == 0 || newSize == null) {
            grid();
        }
        draw();
});  

