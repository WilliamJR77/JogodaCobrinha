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

/*Sitema de Controles no Jogo*/
document.addEventListener('keydown', update);

function update (event){
    if(event.keyCode == 37 && direction != "right") direction = "left"
    if(event.keyCode == 38 && direction != "down") direction = "up"
    if(event.keyCode == 39 && direction != "left") direction = "right"
    if(event.keyCode == 40 && direction != "up") direction = "down"
}

function iniciarJogo(){
    /*tribuir valor a nossa cobrinha para
    ela nao ultrapassar a area definida pelo jogo
    que nos colocamos no nosso cancas que a gente definiu
    */
   if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
   if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
   if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
   if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;
   
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
