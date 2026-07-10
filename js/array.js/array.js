let cores = ["azul" , "amarelo" , "rosa" , "vermelho"];
console.log(cores);

// [ 0 , 1 ,  2 , 3 ];
// [ azul , amarelo , rosa , vermelho ];
//puhs()-> adiciona  elementos ao final do vetor ;

cores.push('roxo' , "ciano");
console.log(cores );

//["azul" , "amarelo" , "rosa" , "vermelho" , " roxo " , "ciano "];
//pop()-> Remove  elementos ao final do vetor ;

cores.pop();
console.log(cores );

//["azul" , "amarelo" , "rosa" , "vermelho" , " roxo "];
//unshift -> Adiciona elementos no inicio do vetor
//shift() -> d Removo elementos do inicio do vetor 

cores.unshift('laranja' , "beje" , "preto")
console.log(cores );

cores.shift();
console.log(cores ); 

cores.shift();
console.log(cores);

//Splice -> Remove  ou Incire elementos em uma posição;
// [ 0 , 1 , 2 ,  3 , 4 ]
// [ azul , amarelo , rosa , vermelho , roxo];

cores.splice(3, 1);
console.log(cores)

cores.splice(2, 0 , "branco" , "cinza");

//sort -> Ordenação Cresente
cores.sort();
console.log(cores);
//[    'amarelo',  'azul',    'branco',   'cinza',    'preto',    'roxo',    'vermelho'  ]

//reverse -> Ordenação Decrecente 
//[    'amarelo',  'azul',    'branco',   'cinza',    'preto',    'roxo',    'vermelho'  ]
console.log(cores)