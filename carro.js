//código dos carros

let xCarros = [600, 100, 200, 500, 400,300];
let yCarros = [40, 96, 150, 210, 260, 315];
let velocidadeCarros = [5, 4.2, 6.8,3, 5, 4.3, 5.3]
let comprimentoDoCarro = 50;
let alturaDoCarro = 40;

function mostraCarro () {
  for (let posicao = 0; posicao < imagensDosCarros.length; posicao++) {
    
    image(imagensDosCarros[posicao], xCarros[posicao], yCarros[posicao], comprimentoDoCarro, alturaDoCarro);
  }
}


function movimentaCarro () {
  
    for (let posicao = 0; posicao < imagensDosCarros.length; posicao++) {
  xCarros[posicao] -= velocidadeCarros[posicao];
  
    }
}

function voltaPosicaoInicialDoCarro() {
  
  for (let posicao = 0; posicao < imagensDosCarros.length; posicao++) {

    if (xCarros[posicao] < -50) {
      xCarros[posicao] = 600;
    }
  }
}
