function calculadora() {
    //pedimos al usuario que ingrese la operación deseada
    const operacion = prompt("Ingrese la operación deseada (suma, resta, multiplicación, división):").toLowerCase();
    //pedimos al usuario que ingrese los números
    const num1 = parseFloat(prompt("Ingrese el primer número:"));
    const num2 = parseFloat(prompt("Ingrese el segundo número:"));

    //Verificamos si los números son válidos
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Por favor, ingrese números válidos.");
        return;
    }

    //Realizamos la operación según lo que el usuario haya ingresado
    let resultado;
    switch (operacion) {
        case "suma":
            resultado = num1 + num2;
            console.log(`El resultado de la suma es: ${resultado}`);
            break;
        case "resta":
            resultado = num1 - num2;
            console.log(`El resultado de la resta es: ${resultado}`);
            break;
        case "multiplicación":
            resultado = num1 * num2;
            console.log(`El resultado de la multiplicación es: ${resultado}`);
            break;
        case "división":
            if (num2 === 0) {
                console.log("Error: No se puede dividir por cero.");
            }
            else {
                resultado = num1 / num2;
                console.log(`El resultado de la división es: ${resultado}`);
            }
            break;
        default:
            console.log("Operación no válida. Por favor, ingrese una operación válida (suma, resta, multiplicación, división).");
            break;
        }
         
    //retornamos el resultado
    return resultado;    

} 

calculadora();