// Función para generar el dígito verificador
function generarDigitoVerificador() {
    var numero = prompt("Ingrese el número para generar el dígito verificador:");
    var digitoVerificador = calcularDigitoVerificador(numero);
    var resultado = numero + "-" + digitoVerificador;
    alert("Número con dígito verificador: " + resultado);
}

// Función para calcular el dígito verificador según los pasos indicados
function calcularDigitoVerificador(numero) {
    // Paso 1: Obtener el rol sin guión ni dígito verificador
    var rolSinGuion = numero.substring(0, numero.length - 2);
    
    // Paso 2: Invertir el número
    var rolInvertido = rolSinGuion.split('').reverse().join('');
    
    // Paso 3: Multiplicar los dígitos por la secuencia 2, 3, 4, 5, 6, 7
    var secuencia = [2, 3, 4, 5, 6, 7];
    var suma = 0;
    for (var i = 0; i < rolInvertido.length; i++) {
        suma += parseInt(rolInvertido.charAt(i)) * secuencia[i % secuencia.length];
    }
    
    // Paso 4: Calcular el módulo 11
    var resto = suma % 11;
    
    // Paso 5: Restar el resultado del módulo a 11
    var digitoVerificador = 11 - resto;
    
    // Paso 6: Manejar casos especiales para dígitos verificadores 10 y 11
    if (digitoVerificador === 10) {
        return 'K';
    } else if (digitoVerificador === 11) {
        return 0;
    } else {
        return digitoVerificador;
    }
}

// Función para verificar existencia en la lista
function verificarExistencia() {
    var numero = prompt("Ingrese el número junto con su dígito verificador:");
    if (listaNumeros.includes(numero)) {
        alert("El número y su dígito verificador están en la lista.");
    } else {
        alert("El número y su dígito verificador no están en la lista.");
    }
}

// Función para mostrar el listado completo de números y dígitos verificadores
function mostrarListado() {
    var listado = "Listado de Números y Dígitos Verificadores:\n\n";
    for (var i = 0; i < listaNumeros.length; i++) {
        listado += listaNumeros[i] + "\n";
    }
    alert(listado);
}

// Lista para almacenar los números generados con dígitos verificadores
var listaNumeros = [];

// Función para generar el dígito verificador y almacenar el número en la lista
function generarDigitoVerificador() {
    var numero = prompt("Ingrese el número para generar el dígito verificador:");
    var digitoVerificador = calcularDigitoVerificador(numero);
    var resultado = numero + "-" + digitoVerificador;
    listaNumeros.push(resultado); // Almacenar el número en la lista
    alert("Número con dígito verificador: " + resultado);
}

// Función para verificar existencia en la lista
function verificarExistencia() {
    var numero = prompt("Ingrese el número junto con su dígito verificador:");
    if (listaNumeros.includes(numero)) {
        alert("El número y su dígito verificador están en la lista.");
    } else {
        alert("El número y su dígito verificador no están en la lista.");
    }
}

// Función para mostrar el listado completo de números y dígitos verificadores
function mostrarListado() {
    var listado = "Listado de Números y Dígitos Verificadores:\n\n";
    for (var i = 0; i < listaNumeros.length; i++) {
        listado += listaNumeros[i] + "\n";
    }
    alert(listado);
}