// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
// function ej1(num){
//     if(num % 2 === 0){
//         console.log('El número ' + num +' es par')
//     }
//     else
//         console.log('El número ' + num +' es impar')
// }

// num = prompt('Ingrese un numero para verificar si es par')
// ej1(num)



// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, 
// y si ninguno lo es, indicar por consola que son iguales.

// function ej2(num1, num2){
//     if (num1===num2){
//         console.log("Son iguales")
//     }
//     else if(num1>num2){
//         console.log('El número '+num1+' es mayor a '+num2)
//     }
//     else{
//         console.log('El número '+num2+' es mayor a '+num1)
//     }
// }

// num1 = prompt('Ingrese un numero para verificar cual es mayor')
// num2 = prompt('Ingrese el otro numero para verificar cual es mayor')
// ej2(num1, num2)



// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
// function ej3(num){
//     if(num % 5 === 0){
//         console.log('Es múltiplo de 5')
//     }
//     else console.log('Lamentablemente, no es múltiplo de 5')
// }

// num = prompt('Ingrese un numero para verificar si multiplo de 5')
// ej3(num)



// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
// function ej4(num){
//     for(let i=1; i<num; i++){
//         console.log(i)
//     }
//     console.log(num) //para imprimir el número en cuestión
// }

// num = prompt('Ingrese un numero para imprimir todos los demás')
// ej4(num)




// 5 - Crear una función que reciba una palabra y un número por parámetro
// e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

// function ej5(palabra, num){
//     while(num > 0){
//         console.log(palabra)
//         num--
//         console.log('----') //le agregué este separador para ver si imprimía la cantidad correcta
//     }
// }

// palabra = prompt('Ingrese una palabra')
// num = prompt('Ingrese la cantidad de veces a repetir la palabra')
// ej5(palabra, num)


           
// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
// function ej6(arr){
//     for(let i=0; i<arr.length; i++){
//         console.log('El array en la posicion '+i+' contiene: '+arr[i])
//     }
// }

// const arr = ['Array', 25, 'JavaScript', 600, '10']
// ej6(arr)


// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array,
//menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

// function ej7(arr){
//     for(let i=0; i<arr.length; i++){
//         if(i === 4)
//             continue
//         console.log('El array en la posicion '+i+' contiene: '+arr[i])
//     }
// }

// const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// ej7(arr)



// 8 - Crea una función que reciba un array de números y un número por parámetro e
// imprima por consola cada número del array multiplicado por el número pasado por parámetro.

// function ej8(arr, num){
//     for(let i=0; i<arr.length; i++){
//         console.log('El valor original era: '+arr[i]+' y multiplicado por el numero que ingresaste es: '+arr[i]*num)
//     }
// }
// const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// num = prompt('Ingresa un numero para multiplicar cada elemento del array:')
// ej8(arr, num)