const { crearTabla } = require("./helpers/index");
const colors = require("colors");
const argv = require("./config/yargs");
console.clear();

console.log("===============================".blue);
console.log("=======Repasado los consecto de asigcronia===========".white);
console.log("===============================".blue);

// const [, , arg3 = "5"] = process.argv;
// const [, base = 4] = arg3.split("=");

// console.log(arg3);

// console.log(process.argv);

console.log(argv);

console.log("base: yargs", argv.base, argv.l);

crearTabla(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creado"))
  .catch((err) => console.error(err));
