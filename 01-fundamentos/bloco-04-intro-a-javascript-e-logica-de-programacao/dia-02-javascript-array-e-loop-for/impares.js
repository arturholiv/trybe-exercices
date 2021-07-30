let numbers = [52, 90, 34, 190, 70, 8, 100, 2, 350, 270];
let quantos = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if(numbers[i] % 2 !== 0) {
        quantos = quantos + 1;
    }
}

if(quantos === 0) {
    console.log("Nenhum valor impar encontrado.")
} else { console.log(quantos) }