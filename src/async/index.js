// Creamos una Promesa
const fnAsync = () => {
  return new Promise((resolve, reject) => {
      (true)
          ? setTimeout(()=> resolve('Async!!'), 2000)
          : reject(new Error('Error!'));
  })
}

// Creamos nuesta Función Asincrona
const anotherFn = async () => {
  const somethig = await fnAsync();
  console.log(somethig);
  console.log('Hello!')
}

console.log ('Before'); // 1
anotherFn();            // 3
console.log('After')    // 2