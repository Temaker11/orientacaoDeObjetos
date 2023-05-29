# O que é Programação Orientada a Objetos? POO?

* Oriented Object Programming ou POO
* Um paradigma de desenvolvimento
* Uma maneira de resolver um problema, um modo de pensar
* Não está ligado somente à linguagem de programação, mas a um entendimento amplo e atemporatal para criação de softwares

## Utilização no mercado 

* Na marioria dos de sistemas atuais 
* Várias linguagens (JS, TS, Java, Python...)
* Utilizado por Analistas de sistemas e não somente por programadores
  * Na fase de levantamento de requisitos de sistema
  * Via gráficos, desenhos e textos

## Onde e quando eu vou utilizar?

* Linguagens
* Quando quiser aplicação padrões de projetos 
* Quando quiser organizar seu código
* Para melhor entendimento do código, pensando nele como Objetos
* Quando precisar fazer reuso de código
* Para separar a complexidade de código, abstrair código e expor de maneira mais simples
* Para classificar as rotinas e trechos de código

## Conceitos 

* Precisamos entender os ceonceitos e paradigma e não somente códigos
* Uma boa fundamentação 
* Pegue papel e caneta, e anote os pontos para você possa revisar posteriormente


## Objetos

Todo Objeto possui 
  * Propriedades e Funcionalidades
  * Estado e Comportamentos
  * Atributos e Métodos

## Abstratos vs Mundo Real 

Trazemos a representação de algo do mundo real para Objetos
  * Pessoa 
  * Aluno
  * Produto
  * Carrinho de compras

Porém, alguns objetos na programação não são fáceis de identificar, pois são abstratos como, por exemplo: 
  * Autenticação 
  * Autorização


# Classes

As Classes na orientação a objetos funcionam como um molde para os objetos, Os objetos são criados a partir de uma classe e muitos deles podem ser feitos da mesma classe.

* Exemplo: Máquina de biscoito
  * Instâncias


## Classes em JavaScript

  * Syntactical sugar
  * Propotype  | ./class.js

## Encapsulamento 
Dirigir carro vs conhecer o motor do carro

  * Colocar numa cápsula
  * Agrupamento de funções de variáveis
  * Esconder detalhes de implementação
  * Camada de segurançã para os atributos e métodos | ./encapsulamento.js

## Confusão e Solução 

### Programação Estruturada
  * PRocessa a entrada e manipulação dos dados, até a saida
  * Uso de sequências, estruturas de repetições e condições
  * Uso de uma rotina maior, ou sub-rotinas
  * não existem restrições às variáveis

### Programação Orientada a Objetos

  * Surge para trazer um cuidado ao uso estruturado
    * Não elimina por completo o uso estruturado 
  * Conceitos como Objetos e Classes 
  * Cuidados com variáveis e rotinas (Encapsulamento)
  * Melhor reuso de código (Herança)

## Herançã

  * Pais e filhos
  * Objetos podem herdar, ou estender, características bases
  * Uma cópia de atributos e métodos de outra classe | ./heranca.js

### Saiba 
  * um objeto pode estender de outro objeto que pode estender de outro objeto
  * Fácil reutilização de código

## Polimorfismo

QUando um objeto estende de outro(Herança) talvez haja a necessidade de reescrever uma ou mais características (atrigutos e métodos) nesse novo objeto.

Recriaremos então um método(ou mais) da classe herdada.

Polimorfismo significa muitas formas | ./polimorfismo.js

## Abstração 

Template ou identidade de uma classe que será construída no futuro

  * Atributos e métodos podem ser criados na classes de abstração (Superclasse) MAS
  * A implementação dos métodos e atributos, só poderá ser feita na classe que irá herdar essa Abstração
  | ./abstracao.js
  
