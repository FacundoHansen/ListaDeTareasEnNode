require('colors');

const mostrarMenu = async()  =>{
    return new Promise( resolve =>{
        console.clear();
        console.log('======================='.red);
        console.log(' Seleccione una opcion '.red);
        console.log('=======================\n'.red);
        console.log(`1. Crear una tarea`.green);
        console.log(`2. Listar tareas`.green);
        console.log(`4. Listar tareas completadas`.green);
        console.log(`3. Listar tareas pendientes`.green);
        console.log(`5. Completar tarea(s)`.green);
        console.log(`6. Borrar tarea`.green);
        console.log(`0. Salir \n`.green)
        const readline = require('readline').createInterface({
            input: process.stdin,
            output:process.stdout
        });
        readline.question('Seleccione una opcion: ', (opt)=>{            
            readline.close();
            resolve(opt);
        })
    });
}
const pausa = () =>{
    return new Promise( resolve =>{
        const readline = require('readline').createInterface({
            input: process.stdin,
            output:process.stdout
        });
        readline.question(`\nPresione ${'ENTER'.red} para continuar\n`, ()=>{         
            readline.close();
            resolve();
        });
    });
}



module.exports = {
    mostrarMenu,
    pausa
}