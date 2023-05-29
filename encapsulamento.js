// Estrutural 

/* let altura = 50
let largura = 60 

function calcularArea() {
  return altura * largura
}

let area = calculaArea() */

// Orientação a Objetos

class Poligono {
  constructor(altura, largura) {
    this.altura = altura
    this.largura = largura
  }
  get area() {
    return this.#calcularArea()
  }
  #calcularArea() {
    return this.altura * this.largura
  }
}

// criar o objeto

let poligono = new Poligono(50, 60)

console.log(poligono.altura)
console.log(poligono.largura)
console.log(poligono.area)


