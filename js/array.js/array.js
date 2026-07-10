let cores = ["azul" , "amarelo" , "rosa" , "vermelho"];
console.log(cores);
console.log('\n');

// [ 0 , 1 ,  2 , 3 ];
// [ azul , amarelo , rosa , vermelho ];
//puhs()-> adiciona  elementos ao final do vetor ;

cores.push('roxo' , "ciano");
console.log(cores );
console.log('\n');

//["azul" , "amarelo" , "rosa" , "vermelho" , " roxo " , "ciano "];
//pop()-> Remove  elementos ao final do vetor ;

cores.pop();
console.log(cores );
console.log('\n');

//["azul" , "amarelo" , "rosa" , "vermelho" , " roxo "];
//unshift -> Adiciona elementos no inicio do vetor
//shift() -> d Removo elementos do inicio do vetor 

cores.unshift('laranja' , "beje" , "preto")
console.log(cores );
console.log('\n');

cores.shift();
console.log(cores ); 
console.log('\n');

cores.shift();
console.log(cores);
console.log('\n');

//Splice -> Remove  ou Incire elementos em uma posição;
// [ 0 , 1 , 2 ,  3 , 4 ]
// [ azul , amarelo , rosa , vermelho , roxo];
console.log('\n');

cores.splice(3, 1);
console.log(cores)
console.log('\n');

cores.splice(2, 0 , "branco" , "cinza");

//sort -> Ordenação Cresente
cores.sort();
console.log(cores);
console.log('\n');

//[    'amarelo',  'azul',    'branco',   'cinza',    'preto',    'roxo',    'vermelho'  ]
console.log('\n');

//reverse -> Ordenação Decrecente 
//[    'amarelo',  'azul',    'branco',   'cinza',    'preto',    'roxo',    'vermelho'  ]
console.log(cores)
console.log('\n');
//--------------------------------------------------------------------------------------------------
console.log("--------------------------------------------------------------------------------------------------");

// [ 0  ,       1 ,        2 ,     3 ,     4 ,     5];
// ["roxo" , 'rosa' , 'branco' , 'azul' , 'amarelo' ];
//slice 
cores.slice(2);
console.log(cores.slice(2, 5));
cores.slice(2, 5);
console.log('\n');



console.log(cores.slice(2));
console.log('\n');


console.log(cores.slice(-2));
console.log('\n');


console.log(cores.slice(0, -1));
console.log('\n');
//--------------------------------------------------------------------------------------------------
console.log("--------------------------------------------------------------------------------------------------");
let arrayFatiado = cores.slice(0, -1);
console.log(arrayFatiado);

//--------------------------------------------------------------------------------------------------
console.log("--------------------------------------------------------------------------------------------------");
let frutas = [`maça` ,`banana` ,`laranja` , `banana` , `uva `];
//indexOF  
console.log(frutas.indexOf('banana')); //-1
console.log(frutas.indexOf('limão')); // -1
// lastIndexOF
console.log(frutas.lastIndexOf('banana')) // 3

//includes
console.log(frutas.includes('laranja')); // true)
console.log(frutas.includes('manga')); // false 

if (frutas.includes("laranja")){
    console.log('Temos laranja')
}

let alunos = [
    { id: 1, nome: 'joão' , nota: 8.5}, // 0
    { id: 2, nome: 'lucas' , nota: 5.0}, // 1
    { id: 3, nome: 'nicole' , nota: 7.0}, // 2
    { id: 4, nome: 'luis' , nota: 3.2}, // 3
];
//Find
let alunoEncontrado = alunos.find(aluno => aluno.nota >= 7.0);
console.log(alunoEncontrado)
//{ id: 1, nome: 'joão', nota: 8.5 }

let indiceAlunoEncontrado = alunos.findIndex(aluno => aluno.nota >= 7.0);
console.log(indiceAlunoEncontrado);

let indiceAlunoEncontrado2 = alunos.findLastIndex(aluno => aluno.nota >= 7.0);
console.log(indiceAlunoEncontrado2)

//--------------------------------------------------------------------------------------------------
console.log("--------------------------------------------------------------------------------------------------");

let vetor1 = [1, 2, 3];
let vetor2 = [4, 5, 6];
let vetorUnido = vetor1.concat(vetor2);

console.log(vetorUnido);
console.log("--------------------------------------------------------------------------------------------------");

let vetorUnido2 = vetor2.concat(vetor1);
console.log(vetorUnido2);
console.log("--------------------------------------------------------------------------------------------------");

//Join
console.log(vetor1.join());
console.log(vetor1.join(', '));
console.log(vetor1.join('/ '));
console.log(vetor1.join('| '));
















console.log(`\n`);
console.log(`🐢`);
