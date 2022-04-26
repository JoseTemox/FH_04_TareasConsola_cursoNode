const { guardarDB, leedDB } = require('./helpers/guardarArchivo');
const { inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
 } = require('./helpers/inquirer');
// const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

require('colors');
// const { pausa } = require('./helpers/mensajes');


const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leedDB();

    if(tareasDB){//cargar tareas

        tareas.cargarTareasFromArray(tareasDB);

    }
    // await pausa();

    do {

        // imprimir el menu
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea(desc);

            break;

            case '2':
                tareas.listadoCompleto();
            break;

            case '3':
                tareas.tareasPendientesCompletadas(true);
            break;

            case '4':
                tareas.tareasPendientesCompletadas(false);
            break;

            case '5':
                const ids = await mostrarListadoChecklist(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
            break;

            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if(id!== '0'){

                    const ok = await confirmar('Esta Seguro?');
                    if (ok){
                        tareas.borrarTarea(id);
                        console.log('Tarea Borrada');

                    }
                }
            break;

        }
        guardarDB(tareas.listadoArr);





        await pausa();
    } while (opt !=='0');



}

main();