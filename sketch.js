function setup() {
    createCanvas(800, 800);
    background(0);
  }
  
  function draw() {
    // Cor da logo marca
    var logoColor = color(0, 228, 228);
    
    // Posição e tamanho do texto
    var textX = width / 2;
    var textY = height / 2;
    var fontSize = 92;
    
    // Configuração do texto
    textAlign(CENTER, CENTER);
    textSize(fontSize);
    textStyle(BOLD);
    fill(logoColor);
    
    // Desenhar o texto
    text("RAS", textX, textY - fontSize * 0.4);
    text("Informática", textX, textY + fontSize * 0.6);
  }
  