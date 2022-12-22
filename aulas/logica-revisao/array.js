// Vetores ou arrays

//let arrayp = ['Aline', 1, false];
//console.log(arrayp);


//pode guardar vários tipos de dados

let array = ['String', 1, true, ['arrai'], ['arrai2']];
//console.log(array[0]);



//Manipulando ARRAY

//array.forEach();
//array.forEach(function(item, index){console.log(item, index)})

//array.push();  inclui um novo dado para dentro do array
array.push('novo item');
console.log(array);

//array.pop(); remove um item no final do array
array.pop();
console.log(array);

//array.shift (); remove um item do inicio do array
array.shift();
console.log(array);

//array.unshift(); adiciona um item no inico do array
array.unshift('piu');
//console.log(array);

//indexOf() retorna o índice de um valor dentro do array
console.log(array.indexOf(1));

//splice() remove ou substitui um item por um índice
array.splice(0 ,3);
console.log(array);

//slice() retorna uma parte de um array existente
let novoArray = array.slice (0, 3);
console.log(novoArray);


//OBJETO
let object = {string: 'string', number:1, boolean:true,array:['array'], objectInterno:{objectInterno:'Objeto interno'}};

console.log(object.objectInterno);

//Desestruturação

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var {string, boolean} = object;
console.log(string,boolean);
