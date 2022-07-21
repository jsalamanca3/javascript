//una suma como ejemplo del uso de los callback

function sum (num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
};

console.log(calc(2, 2, sum));

//Set time out para agregar tiempo

setTimeout(function () {
    console.log('Hola JavaScript');
}, 2000)

//funsión de saludo

function gretting(name) {
    console.log(`Hola ${name}`)
}
setTimeout(gretting, 2000, 'Julián');