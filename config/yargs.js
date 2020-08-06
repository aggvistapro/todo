const argv = require('yargs')
	.command('crear', 'Crear un nuevo elemento', {
		descripcion: {
			demand: true,
			alias: 'd',
			desc: 'Descripcion de la tarea por haceer'
		}
	})
	.command('actualizar', 'Actualizar el estado de la tarea seleccionada', {
		descripcion: {
			demand: true,
			alias: 'd',
			desc: 'Descripcion de actualizar'
		},
		completado: {
			default: true,
			alias: 'c',
			desc: 'Marca completado/pendiente la tarea'
		}
	})
	.command('borrar', 'Eliminar una tarea seleccionada', {
		descripcion: {
			demand: true,
			alias: 'd',
			desc: 'Descripcion de borrado'
		}
	})
	.help().argv;

module.exports = { argv };
