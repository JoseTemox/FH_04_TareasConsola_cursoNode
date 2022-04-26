const { v4: uuidv4 } = require ('uuid');

class Tarea {
    id = '';
    desc = '';
    completadoEn = null

    constructor(desc){
        this.id = uuidv4();
        this.desc = desc;
        this.completadoEn = null;//esta no es necesaria porque se sobre entiende al inicio de la clase
    }
}

module.exports = Tarea;


