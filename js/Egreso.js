class Egreso extends Dato{

    static contadorEgreso = 0;

    constructor(descripcion, valor) {
        super(descripcion, valor);
        this.id = ++Egreso.contadorEgreso;
    }

    get Id() { 
        return this.id;
    }

}