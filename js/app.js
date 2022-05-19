const ingresos = [
    new Ingreso('Salario', 2100.00),
    new Ingreso('Venta auto', 1500.00),
    new Ingreso("Honorarios", 300),
];

const egresos = [
    new Egreso('Renta', 900.00),
    new Egreso('Expensas', 400.00)
];

let cargarApp = ()=>{
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}


let totalIngresos = () => {
    let totalIngreso = 0;
    for(let ingreso of ingresos) {
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

let totalEgresos = () => {
    let totalEgreso = 0;
    for(let egreso of egresos) {
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}

let cargarCabecero = () => {
    let presupuestoTotal = totalIngresos() - totalEgresos();
    let porcentajeEgresos = totalEgresos()/totalIngresos();

    document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuestoTotal);
    document.getElementById("porcentaje").innerHTML = formatoPorcentaje(porcentajeEgresos);
    document.getElementById("ingresos").innerHTML = formatoMoneda(totalIngresos());
    document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());

}


const formatoMoneda = (valor)=>{
    return valor.toLocaleString('en-US',{style:'currency', currency:'USD', minimumFractionDigits:2});
}

const formatoPorcentaje = (valor)=>{
    return valor.toLocaleString('en-US',{style:'percent', minimumFractionDigits:2});
}

const cargarIngresos = () => {
    let ingresosHTML = "";
    for(ingreso of ingresos){
        ingresosHTML += crearIngresosHTML(ingreso);
    }
    document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
}

const cargarEgresos = () => {
    let egresosHTML = "";
    for(egreso of egresos){
        egresosHTML += crearEgresosHTML(egreso);
    }
    document.getElementById("lista-egresos").innerHTML = egresosHTML;
}



const crearIngresosHTML = (ingreso) => {
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">           
                    <div class="elemento_descripcion">${ingreso.descripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn">
                                <ion-icon name="close-circle-outline"
                                onclick="eliminarIngreso(${ingreso.id})"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
                `;
                return ingresoHTML;
}

const eliminarIngreso = (id) => {
    let indiceEliminado = ingresos.findIndex(ingreso => ingreso.id === id);
    ingresos.splice(indiceEliminado, 1);
    cargarCabecero();
    cargarIngresos();    
}

const crearEgresosHTML = (egreso) => {    
    let egresoHTML = `
    <div class="elemento limpiarEstilos">           
                    <div class="elemento_descripcion">${egreso.descripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>
                        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn">
                                <ion-icon name="close-circle-outline"
                                onclick="eliminarEgreso(${egreso.id})"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
                `;
                return egresoHTML;
}

const eliminarEgreso = (id) => {
    let indiceEliminado = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(indiceEliminado, 1);
    cargarCabecero();
    cargarEgresos();    
}

const agregarDato = () => {
    let forma = document.forms["forma"];    
    let tipo = forma["tipo"];
    let descripcion = forma["descripcion"];
    let valor = forma["valor"];
    if(descripcion.value !== "" && valor.value !== ""){
        if(tipo.value === "ingreso"){
            ingresos.push(new Ingreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarIngresos();
        }

        else if(tipo.value === "egreso"){
            egresos.push(new Ingreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarEgresos();
        }
    }

}