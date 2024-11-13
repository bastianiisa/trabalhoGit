class Cachorro {
  nome: string;
  cor: string;
  idade: number;

  constructor(nome: string, cor: string, idade: number) {
    this.nome = nome;
    this.cor = cor;
    this.idade = idade;
  }
  latir() {
    return `O cachorro ${this.nome} latiu.`;
  }
}

const cachorroUm = new Cachorro("Carol", "Branco", 8);
console.log(cachorroUm.latir());
