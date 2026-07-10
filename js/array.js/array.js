let cores = ["azul" , "amarelo" , "rosa" , "vermelho"];
console.log(cores);

// [ 0 , 1 ,  2 , 3 ];
// [ azul , amarelo , rosa , vermelho ];
//puhs()-> adiciona  elementos ao final do vetor ;

cores.push('roxo' , "ciano");
console.log(cores );

//["azul" , "amarelo" , "rosa" , "vermelho" , " roxo " , "ciano "];
//pop() -> Remove elementos do final do vetor 

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

