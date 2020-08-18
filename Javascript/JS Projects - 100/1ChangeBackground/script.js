var colorChange = document.querySelector(".colorChange");
var wrapper = document.querySelector(".wrapper");

var colorsArray = ['red', 'yellow', 'pink', 'green', 'blue'];



var colorChanger = () => {
    colorChange.addEventListener('click', () => {
    
        const colorIndex= parseInt(Math.random()*colorsArray.length)
        
            console.log(colorIndex);
            wrapper.style.background = colorsArray[colorIndex];  
            
            
    });
};

