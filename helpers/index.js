const fs = require("fs");
const colors = require("colors");

const crearTabla = async (base, listar = false, hasta = 10) => {
  try {
    let salidad = "";
    let consola = "";

    for (let i = 1; i <= hasta; i++) {
      salidad += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${"x".blue} ${i} = ${base * i}\n`;
    }

    if (listar) {
      console.log("==============================");
      console.log(`imprimiendo la tabla de multiplicar = ${base}`);
      console.log("==============================");
      console.log(consola);
    }

    fs.writeFileSync(`./salidad/Tabla-${base}.txt`, salidad);

    return `tabla-${base}.txt `;
  } catch (err) {
    throw err;
  }
};

/*
repasando conselto de jhon mircha
*/

function cudradoCallback(valor, callback) {
  setTimeout(function () {
    callback(valor, valor * valor);
  }, 0 | (Math.random() * 2000));
}

const cudradoPromesa = (valor) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({
        valor,
        result: valor * valor,
      });
    }, 0 | (Math.random() * 2000));
  });
};

module.exports = {
  crearTabla: crearTabla,
  numeroCuadrado: cudradoCallback,
  promesaCuadrado: cudradoPromesa,
};
