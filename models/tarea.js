const {v4: uudidv4}=require('uuid');

class Tarea{
    
    id = '';
    desc ='';
    completadoEn = null;

    constructor(desc){
        this.id = uudidv4();
        this.desc = desc;
        this.completadoEn = null;
    }
}

module.exports = Tarea;