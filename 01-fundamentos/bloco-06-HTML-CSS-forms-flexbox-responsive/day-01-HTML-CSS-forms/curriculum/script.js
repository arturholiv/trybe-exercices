
let estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO" ]

for(let i = 0; i < estados.length; i += 1) {
  let estado = estados[i]

  let option = document.createElement('option');
  option.value = estado;
  option.innerText = estado;
  
  let select = document.querySelector('#estado');
  select.appendChild(option);
}

