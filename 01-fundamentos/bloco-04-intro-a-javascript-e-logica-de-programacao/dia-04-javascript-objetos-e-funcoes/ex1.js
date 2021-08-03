

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  let info2 = {
    personagem: 'Tio Patinhas',
   origem: `Christmas on bear Moutain, Dell's Four Color Comics #178`,
   nota: 'O último MacPatinhas',
   recorrentes: sim
  };

  for( let keys in info) {
      console.log(info[keys]);
  }


 // 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:

 // console.log('Bem vinda, ' + info.personagem);

 //2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

info.recorrente = 'Sim'

//console.log(info.recorrente);

// for(let key in info){
//    console.log(key) 
// }

// for(let key in info){
//     console.log(info[key])
// }

