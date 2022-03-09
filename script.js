

    const container = document.querySelector('.container');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';

    for (i = 0; i < 16; i++) {    
        let row = document.createElement('div');
        container.appendChild(row)    
        row.className = 'row'
        row.style.display = 'flex';
        row.style.flex = '1';
        row.style.flexDirection = 'row';
        for (n = 0; n < 16; n++) {
            let pixel = document.createElement('div');
            row.appendChild(pixel);
            pixel.className = 'pixel'
            pixel.style.backgroundColor = 'black';
            pixel.style.height = '20px';
            pixel.style.width = '20px';
            pixel.style.flex = '1';
            pixel.style.margin = '2px';
        }
    };
   
