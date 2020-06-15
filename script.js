const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    //get random number between 0 - 3, colors[3]
    const randomNumber = getRandomNumber();
    console.log(randomNumber)

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

// hex section starts here
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const hexBtn = document.getElementById("btn")

const hexColor = document.querySelector('.color');

btn.addEventListener('click', function(){
    let hexColors = '#'
    for(let i=0; i<6; i++){
    hexColors += hex[getRandomHexNumbers()]
    }
    hexColor.textContent = hexColors;
document.body.style.backgroundColor = hexColors;
})



function getRandomHexNumbers(){
    return Math.floor(Math.random() * hex.length)
}