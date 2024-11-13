class Gato {
nome: string
cor: string
idade: number


constructor(nome: string, cor:string, idade:number){
    this.nome = nome
    this.cor = cor
    this.idade = idade;
}
miar(){
    return `O gato ${this.nome} fez miau.` ;
}
}

const gatoUm = new Gato("Kaminari", "Laranja", 5)
console.log(gatoUm.miar())