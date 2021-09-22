const techList = (techList, name) => {
  if (techList.length === 0) return 'Vazio!';

  return techList.sort().map((technology) => ({
    tech: technology,
    name,
  }));
}
module.exports = techList