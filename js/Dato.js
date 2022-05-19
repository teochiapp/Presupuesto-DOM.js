class Dato{
    constructor(descripcion, valor){
        this.descripcion = descripcion;
        this.valor = valor;
    }

    get Descripcion(){
        return this.descripcion;
    }

    set Descripcion(descripcion){
        this.descripcion = descripcion;
    }

    get Valor(){
        return this.valor;
    }

    set Valor(valor){
        this.valor = valor;
    }
}