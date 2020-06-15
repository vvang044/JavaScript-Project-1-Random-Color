# JavaScript-Project-1-Random-Color
Two ways to create colors, simple way and the hex way

First create
```
index.html, hex.html, script.js, style.css
```
In index.html create a simple template and add navigation with two links. One will be simple and the other will be hex.
Simple will direct to index.html and hex on click will direct to hex.html.
First lets tackle "simple"
In script.js file, create a variable for colors, create a variable for color.
Colors will hold four colors
Color will be document.querySelector('.color')
Attach an eventListener to "btn" on click.
Create a variable randomNumber that will be a method getRandomNumber
Create a method for getRandomRunumber which gives a number between 0 - 3 ( Math.floor(Math.random( ) * colors.length)
Now document.body.style.background will be the colors[randomNumber]
the the textConent will be colors.textContent = colors[randomNumber]

Now for hex colors
Similar logic applies except for the btn.addEventListener('click', function( ){
create hexColors = '#'
And loop through hex and increment it


