const newEmployees = (empl) => {
  const employees = {
    id1: empl('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: empl('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: empl('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const empl = (name) => {
  const email = name.toLowerCase().split(' ').join('_');
  return { name, email: `${email}@trybe.com` };
}

console.log(newEmployees(empl))