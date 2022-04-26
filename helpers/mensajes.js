require('colors');


const mostrarMenu = () => {

    return new Promise( resolve => {

        console.clear();
    console.log('======================='.green);
    console.log('     Elija Opcion'.green);
    console.log('=======================\n'.green);



    console.log(`${ '1.-'.green } Crear Tarea`);
    console.log(`${ '2.-'.green } Mostrar Tareas`);
    console.log(`${ '3.-'.green } Mostrar Tareas Completadas`);
    console.log(`${ '4.-'.green } Mostrar Tareas Pendientes`);
    console.log(`${ '5.-'.green } Terminar Tarea(s)`);
    console.log(`${ '6.-'.green } Eliminar Tarea`);
    console.log(`${ '0.-'.green } Salir\n`);

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Elija una opcion: ', (opt)=> {
        readline.close();
        resolve(opt);
    })

    });

}

const pausa = () => {

    return new Promise( resolve => {

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(`\nPresione ${ 'ENTER'.green } para continuar\n`, (opt)=> {
            readline.close();
            resolve();
        })
    });
}


module.exports = {
    mostrarMenu,
    pausa
}

