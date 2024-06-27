let x, y; // Posições x e y do texto
let xSpeed, ySpeed; // Velocidades x e y do texto
let r, g, b; // Variáveis para as cores

function setup() {
  createCanvas(700, 400);
  textSize(48);
  
  // Inicializa as posições do texto
  x = width / 2;
  y = height / 2;
  
  // Inicializa as velocidades do texto
  xSpeed = 3;
  ySpeed = 2;
  
  // Inicializa as cores
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(color("black"));
  
  // Definer a cor de preenchimento do texto
  fill(r, g, b);
  
  // Desenha o texto
  text('Vinicius', x, y);
  
  // Atualizar as posições do texto
  x += xSpeed;
  y += ySpeed;
  
  // Verificar se o texto bateu nas bordas da tela e inverter a direção
  // Muda a cor do texto ao bater nas bordas
  if (x > width - textWidth('Vinicius Vascon.') / 2 || x < textWidth('') / 2) {
    xSpeed *= -1;
    changeColor();
  }
  if (y > height - textAscent() / 3 || y < textAscent() / 1) {
    ySpeed *= -1;
    changeColor();
  }
}

// Função para mudar a cor do texto
function changeColor() {
  r = random(255);
  g = random(255);
  b = random(255);
}