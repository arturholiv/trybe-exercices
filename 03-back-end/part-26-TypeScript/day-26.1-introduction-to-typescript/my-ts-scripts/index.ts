import readline from "readline-sync";
import yearMonths from "./yearMonths";
import yearSeasons from "./yearSeasons";

const months = Object.values(yearMonths);

const choseMonth = readline.keyInSelect(months, "Chose a month");

// O método .keyInSelect mostra uma interface de escolha para o usuário

const seasonsSouth = {
  [yearSeasons.AUTUMN]: [yearMonths.MARCH, yearMonths.APRIL, yearMonths.MAY, yearMonths.JUNE],
  [yearSeasons.WINTER]: [yearMonths.JUNE, yearMonths.JULY, yearMonths.AUGUST, yearMonths.SEPTEMBER],
  [yearSeasons.SPRING]: [yearMonths.SEPTEMBER, yearMonths.OCTOBER, yearMonths.NOVEMBER, yearMonths.DECEMBER],
  [yearSeasons.SUMMER]: [yearMonths.DECEMBER, yearMonths.JANUARY, yearMonths.FEBRUARY, yearMonths.MARCH],
}

const month = Object.values(yearMonths)[choseMonth];

console.log(`Mês: \n${month}`);