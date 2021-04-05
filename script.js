let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x:8 * box,
    y:8 * box
}
let direction = "right"; 

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0,  16 * box, 16 * box);   
}


function criarCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "Maroon";
        context.fillRect(snake[i].x, snake[i].y, box, box);

    }
}

function iniciarJogo(){
    criarBG();
    criarCobrinha(); 
    
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box; // mover para direita
    if(direction == "left") snakeX -= box; // mover para Esquerda
    if(direction == "up") snakeY -= box // mover para cima
    if (direction == "down") snakeY += box// mover para baixo
    
    snake.pop(); // retira o utimo elemento do Array

    //criando uma nova cabeca da cobrinha com unshift
       
   let newHead = {
           x: snakeX,
           y: snakeY
       }
   
       snake.unshift(newHead); // acrescenta um novo elemento a frente do outro
}

let jogo = setInterval (iniciarJogo, 100);
