let umaString = 'Um "texto"';
let outraString = 'O trigre estava triste e comeu três pratos de trigo para três tigres tristes';
console.log(umaString.charAt(5));//.charAt serve para pegar aquele número específico dentro do elemento, no exemplo é o 5, então ele pega o index 5(a conta vai de 0 ate...)
console.log(umaString.indexOf('texto', 0));//indexOf mostra onde aquela coisa tá na variável
console.log(umaString.search('U'));//esse aqui procura onde tem o que vc está procurando
console.log(outraString.replace(/t/g,'*'));//como substituir uma letra em uma frase
console.log(outraString.length);//mostra o tamanho da string, nesse caso tem 76 contando com o 0
console.log(outraString.slice(0,8));//corta, faz um slice corte naquele intervalo 
console.log(outraString.split(' ',5))
console.log(outraString.toUpperCase());//aumenta o tamanho das letras