function ejercicio1() {
  let nombre = prompt("Ingrese el nombre del trabajador");
  let sueldobase = +prompt("Ingrese el sueldo base");
  let hijos = +prompt("Ingrese la cantidad de hijos");
  let sueldofinal;
  let bonificacion = 0;

  if (hijos > 0) {
    bonificacion = sueldobase * 0.07;
  }

  sueldofinal = sueldobase + bonificacion;

  alert(`Nombre del trabajador ${nombre} \n
    Bonificación:${bonificacion.toFixed(2)} \n
    Sueldo Final:${sueldofinal}
`);
}
function ejercicio2() {
  let numero = +prompt("Ingrese un número");

  if (numero > 500) {
    const porcentaje = numero * 0.18;
    alert(`El número ${numero} y su 18% es : ${porcentaje.toFixed(2)}`);
  } else {
    alert(`El número ${numero} no es mayor que 500`);
  }
}
function ejercicio3() {
  let num = +prompt("Ingrese un número para hallar su factorial");

  let factorial = 1;

  for (let index = 1; index <= num; index++) {
    factorial *= index;
  }

  alert(`El factorial de ${num} es ${factorial}`);
}
