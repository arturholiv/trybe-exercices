const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from(
      {length: 10},
      () => Math.floor(Math.random() * 50) + 1,
    );

    const soma = myArray.map((number) => number * number)
      .reduce((soma, number) => soma +number);
    soma < 8000 ? resolve() : reject();
  });
  myPromise
    .then((soma) => console.log(`Promise resolvida ${soma}`))
    .catch((soma) => console.log(`Promise rejeitada ${soma}`));
}
fetchPromise();