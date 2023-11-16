
let num1;
let num2;
let contador = 1

num1 = Number(prompt('Escriba un numero entre 1 y 100'))
num2 = Match.round(Match.random()*100)

while (num1 != num2){
    if (num1<num2){
        alert('El numero pensado es mas ALTO')
    }else{
        alert('El numero pensado es mas BAJO')
    }
    num1 = Number(prompt('Escriba otro numero'))
    contador++
}

alert('Felicitacion!! El numero pensado era ' +num2+ '\n Lo resolviste en '+contador+ 'intentos')