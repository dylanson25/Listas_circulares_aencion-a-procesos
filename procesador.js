let Proceso = require('./proceso')

let procesador = function () {
    this.cuantosProcesos = 0
    this.ciclos = 0
    this.sinAtender = 0
    this.atendidos = 0
    this.inicio = null

    function agregar(nuevo) {
        if (this.inicio === null) {
            this.inicio = nuevo
            nuevo.siguiente = this.inicio
        } else {
            let aux = this.inicio
            while (aux.siguiente !== this.inicio) {
                aux = aux.siguiente
            }
            aux.siguiente = nuevo
            nuevo.siguiente = this.inicio
        }
        this.cuantosProcesos++
    }
    function crearProceso() {
        let probabilidad = Math.ceil(Math.random() * 100)
        if (probabilidad < 40) {
            let P1 = new Proceso()
            this.agregar(P1)
            return true
        }
        else return false
    }
    function iniciarCiclos() {
        if (this.ciclos === 300) {
            return 'clicos sin atender: ' + this.sinAtender + ' clicos atendidos: ' + this.atendidos
        }
        else {
            this.crearProceso()
        }
    }
}
