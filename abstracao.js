// definir 
class Parafuso { // Superclass - Abstrata
  constructor() {
    if (this.constructor === Parafuso) 
      throw new Error('Class abstrata não pode ser instânciada')
  }
  get tipo() {
    throw new Error('Método "get tipo()" precisa ser implementado')
  }
}

class Fenda extends Parafuso {
  constructor() { super()}
  
  get tipo() {
    return 'fenda'
  }
}

class Philips extends Parafuso {
  constructor() { super() }

  get tipo() {
    return 'philips'
  }
}

class Allen extends Parafuso {}

// criar e usar 
/* new Parafuso() // 'Classe abstrata não pode ser instânciada' */
let fenda = new Fenda()
let philips = new Philips()
let allen = new Allen()

console.log(fenda.tipo, philips.tipo)
/* console.log(allen.tipo) // 'Método "get tipo()" precisa ser implementado' */


// Nesse exemplo, só existe parafuso se ele for de algum tipo específico como: Fenda, Philips ou Allen