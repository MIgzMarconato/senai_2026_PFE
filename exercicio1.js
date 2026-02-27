class Produto {
    constructor(nome, preco, estoque) {
        if (preco < 0 || estoque < 0) {
            console.log("Erro: preço e estoque não podem ser negativos.");
            return;
        }

        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    aplicarDesconto(percentual) {
        if (percentual < 0 || percentual > 100) {
            console.log("Percentual inválido.");
            return;
        }

        this.preco -= this.preco * (percentual / 100);
    }

    valorEmEstoque() {
        return this.preco * this.estoque;
    }
}

// Criando produtos
const produto1 = new Produto("Notebook", 3000, 5);
const produto2 = new Produto("Mouse", 100, 10);

// Aplicando desconto no produto1
produto1.aplicarDesconto(10);

console.log("Valor total produto1:", produto1.valorEmEstoque());
console.log("Valor total produto2:", produto2.valorEmEstoque());

// Comparação
if (produto1.valorEmEstoque() > produto2.valorEmEstoque()) {
    console.log("Produto1 tem maior valor em estoque.");
} else {
    console.log("Produto2 tem maior valor em estoque.");
}