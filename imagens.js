//código das imagens
let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro1;
let imagemDoCarro2;
let imagemDoCarro3;

//código dos Sons;
let somColidiu;
let somPontos;
let somTrilha;

function preload () {
  
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemDoCarro1 = loadImage("imagens/carro-1.png");
  imagemDoCarro2 = loadImage("imagens/carro-2.png");
  imagemDoCarro3 = loadImage("imagens/carro-3.png");
  imagensDosCarros = [imagemDoCarro1, imagemDoCarro2, imagemDoCarro3, imagemDoCarro2, imagemDoCarro3, imagemDoCarro1];
  somColidiu = loadSound("imagens/colidiu.mp3");
  somPontos = loadSound("imagens/pontos.wav");
  somTrilha = loadSound("imagens/trilha.mp3");
  
}
