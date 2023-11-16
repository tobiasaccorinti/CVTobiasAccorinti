let num1;
let num2;
let contador = 1;

num1 = Number(prompt('Escriba un numero entre 1 y 100'));
num2 = Math.round(Math.random() * 100);

while (num1 !== num2) {
    if (num1 < num2) {
        alert('El numero pensado es más ALTO');
    } else {
        alert('El numero pensado es más BAJO');
    }
    num1 = Number(prompt('Escriba otro numero'));
    contador++;
}

alert('¡Felicidades! El numero pensado era ' + num2 + '.\n Lo resolviste en ' + contador + ' intentos.');