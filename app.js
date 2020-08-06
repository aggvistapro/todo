const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
	case 'crear':
		let tarea = porHacer.crear(argv.descripcion);
		console.log(tarea);
		break;
	case 'listar':
		let listado = porHacer.getListado();
		console.log(listado);
		for (let tarea of listado) {
			console.log('=========================='.bgCyan);
			console.log(tarea.descripcion.green);
			console.log(`Estado actual ${tarea.completado ? 'Activo'.blue : 'Terminado'.red}`);
			console.log('=========================='.bgCyan);
		}
		break;
	case 'actualizar':
		let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
		console.log(actualizado);
		break;
	case 'borrar':
		let borrado = porHacer.borrar(argv.descripcion);
		console.log(borrado);
		break;
	default:
		console.log('No reconozco este comando');
		break;
}
