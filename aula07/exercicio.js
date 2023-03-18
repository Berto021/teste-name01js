const nome = 'Humberto Ribeiro De Lima';
const idade = 18;
const peso = 90;
const altura = 1.73; //está em metros
const imc = peso/altura**2;
let anoNascimento = 2023 -idade - 1;
console.log(nome,'tem',idade,'anos, pesa', peso +'kg','tem', altura,'metros de altura e seu IMC é de', imc,'e nasceu no ano de',anoNascimento); 

console.log(`O nome dessa pessoa é ${nome} e ele pesa ${peso}kg e tem altura de ${altura}`);//o nome desse ${} é template string, é muito semelhante ao print(f'nananananananananan{variável}nanananananan{variável}) do python