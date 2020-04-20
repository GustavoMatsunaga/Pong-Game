//código do Ator;

let yAtor = 366;
let xAtor = 100;
let colisao = false;
let meusPontos = 0;

function mostraAtor () {
  
    image(imagemDoAtor, xAtor, yAtor, 30, 30);
  
}

function movimentaAtor () {
  
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  
    if (keyIsDown(DOWN_ARROW)) {
      if (podeSeMoverY()) {
        yAtor += 3;
      }
  }
    if (keyIsDown(LEFT_ARROW)) {
      if (podeSeMoverEsquerda()) {
        xAtor -= 3;
      }
  }
  
    if (keyIsDown(RIGHT_ARROW)) {
      if (podeSeMoverDireita()){
        xAtor += 3;
      }
      else{
        xAtor = 480
      }
  }
}

function verificaColisao () {
  
  for (let i = 0; i < imagensDosCarros.length; i++) {
    //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoDoCarro, alturaDoCarro, xAtor, yAtor, 20)
      if (colisao) {
        retornaAoPontoInicial();
        meusPontos = 0;
        somColidiu.play();
      }
  }
}
  
function retornaAoPontoInicial () {
  return yAtor = 366;
}

function incluiPlacar () {
  textSize(24);
  fill(250, 240, 80);
  textAlign(CENTER);
  text(meusPontos, 100, 26);
}

function marcaPonto() {
  
  if (yAtor < 9) {
    meusPontos += 1;
    retornaAoPontoInicial();
    somPontos.play();
  }
}

function podeSeMoverY () {
  if (yAtor < 380 ) {
    return true
  }  
}
  
function podeSeMoverEsquerda () {
  if (xAtor > 0) {
    return true
  }  
}

function podeSeMoverDireita () {
  if (xAtor < 490) {
    return true
  }  
}
  
  
  
  
  
  
  
  
  
