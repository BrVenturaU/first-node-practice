const {names, ages, companies} = require('./data');
const Program1 = require('./program1');
const Program2 = require('./program2');

const option = process.argv.slice(2)[0];
switch (option) {
    case "1":
        let program1 = new Program1();
        program1.makeQuestion("Escribe tu nombre: ", true);
        break;

    case "2":
        let program2 = new Program2();
        break;

    case "3":
        console.log("Nombres: ");
        names.forEach((n, i) => console.log(`El nombre N° ${i+1} es: ${n}`));
        console.log("Edades: ");
        ages.forEach((a, i) => console.log(`La edad N°${i+1} es: ${a}`));
        console.log("Empresas: ");
        companies.forEach((c, i) => console.log(`La empresa N°${i+1} es: ${c}`));
        break;

    default:
        console.log("No ha seleccionado una opción válida.");
        break;
}
