const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "este comando toma la base y crea una tabla de multplicar",
  })
  .option("l", {
    alias: "lista",
    type: "boolean",
    demandOption: true,
    default: false,
    describe: "este comando muestra la tabla de multiplicar por consola",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    demandOption: true,
    describe: "este comando pone un limite en la tabla de multplicar",
    default: 10,
  })
  .check((argv, option) => {
    if (isNaN(argv.b)) {
      throw "La base es requeridad";
    }

    return true;
  }).argv;

module.exports = argv;
