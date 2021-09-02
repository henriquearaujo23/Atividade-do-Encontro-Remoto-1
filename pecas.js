// if, else if, else (Validação do número de peças)
var listaDePecas = ["Filtro do Ar", "Motor", "Amortecedor"]

if (listaDePecas.length <= 10) {
    // É possível cadastrar peças
    console.log("É possível cadastrar mais peças");
} else {
    console.log("Não tem mais espaço nessa lista, impossível cadastrar")
}

// if, else if, else (Validação do peso da peça)
let peso = 150;

if (peso < 100) {
    console.log("A peça deve pesar no mínimo 100g")
} else {
    console.log("A peça possui peso adequado")
}

// if, else if, else (Validação de caracteres)
let nomePeca = "";

// = -> Atribuição de valor, ler como RECEBE
// == -> Verificação se os valores são iguais, ler como É IGUAL?
// === -> Verificação se o valor é igual e também o tipo do valor, verifica valor e tipo

if (nomePeca.length > 3) {
    console.log("Nome de peça está adequado para cadastro!!")
} else if(nomePeca.length == 0) {
    console.log("O nome da peça não pode ser vazio.")
} else {
    console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado.")
} 


//switch (Validação de caracteres)
switch (nomePeca.length) {
    case 0:
        console.log("O nome da peça não pode ser vazio.")
        break;

       case 1:
       case 2:
       case 3:
           console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado.")  
           break;   


        default:
            console.log("O nome de peça está adequado para o cadastro!!")
            break;
}


