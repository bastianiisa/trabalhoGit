var Gato = /** @class */ (function () {
    function Gato(nome, cor, idade) {
        this.nome = nome;
        this.cor = cor;
        this.idade = idade;
    }
    Gato.prototype.miar = function () {
        return "O gato ".concat(this.nome, " fez miau.");
    };
    return Gato;
}());
var gatoUm = new Gato("Kaminari", "Laranja", 5);
console.log(gatoUm.miar());
