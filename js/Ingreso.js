class Ingreso extends Dato{

    static contadorIngreso = 0;

    constructor(descripcion, valor) {
        super(descripcion, valor);
        this.id = ++Ingreso.contadorIngreso;
    }

    get Id() { 
        return this.id;
    }

}