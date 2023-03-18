//Não podemos criar constantes com palavras reservadas
//Constantes precisam ter nomes significativos
//Não pode começar o nome de uma constante com um número
//Não podem conter espaços ou traços
//utilizamos camelcase
//Case-sensitive
//Não pode modificar o valor de uma constante
//NÃO UTILIZE VAR, UTILIZE CONST
const primeiroNumero = 5;
const segundoNumero = 10;
const conta = primeiroNumero * segundoNumero;
const contaDuplicada = conta*2;
const contaTriplicada = conta*3;
console.log(conta);
console.log(contaDuplicada);
console.log(contaTriplicada); 
console.log(typeof contaDuplicada);//typeof serve pra descobrir o tipo daquela variável e tals