var numSquares= 6;
var colors= [];
var pickedColor;

var squares= document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;
var messageDisplay= document.querySelector("#message");
var h1= document.querySelector("h1");
var resetButton= document.querySelector("#reset");
messageDisplay.textContent="¡A jugar!";
var modeButtons=document.querySelectorAll(".mode");

init();

function init(){
    setUpModeButton();
    setUpSquares();
    reset();
}

function setUpModeButton(){
    for(var i=0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function (){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Fácil" ? numSquares=3: numSquares=6;
            reset();
            });
    }
}

function setUpSquares(){
    for(var i=0; i<squares.length; i++){
        //Agregar escuchadores a cuadrados
        squares[i].addEventListener("click", function(){
        //escoje un color 
        var clickColor=this.style.backgroundColor;
        //Compara el clickColor a pickedColor
        if(clickColor=== pickedColor){
            messageDisplay.textContent="Correcto!!"
            changeColors(clickColor);
            h1.style.backgroundColor=clickColor;
            resetButton.textContent="Juega de nuevo";
        }
        else{
            this.style.backgroundColor="#232323";
            messageDisplay.textContent="Intentalo de nuevo";
        }

        } );
    }

}

function reset(){
    //generate all new color
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to march picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent="Nuevos colores";
    //messageDisplay.textContent="Game On";
    //change colors of squares
    for(var i=0; i <squares.length; i++){
        if(colors[i]){
            squares[i].style.display="block";
            squares[i].style.backgroundColor =colors[i];
        }else{
            squares[i].style.display="none";
        }
        
        
    }
    h1.style.backgroundColor="steelblue";
    messageDisplay.textContent="¡A jugar!"
}


resetButton.addEventListener("click", function(){
   reset();

});



function changeColors(color){
    //Loop through all squares
    for(var i=0; i< squares.length; i++){
        //cambiar el color de los cudros uno a uno
        squares[i].style.backgroundColor=color;
    }

}

function pickColor(){
    var random = Math.floor(Math.random()* colors.length);
    return colors [random];
}

function generateRandomColors(num){
    //hacer un array
    var arr=[];
    //agregar numeros random al array
    for( var i=0; i<num; i++){
        //obtener un color ramdon y push into the array
        arr.push(randomColor());
    }
    //devolver el array
    return arr;
}

function randomColor(){
    var r =Math.floor(Math.random()*256);
    var g =Math.floor(Math.random()*256);
    var b =Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")"; 
}