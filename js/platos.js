/** BOTONES */
const boton_der = document.getElementById('btn_der')
const boton_izq = document.getElementById('btn_izq')

/** SLIDER */
const contenido = document.getElementById('platos_contenido')

const plato_albondigas = document.getElementById('plato_albondigas')
const plato_espaguetis = document.getElementById('plato_espaguetis')
const plato_cocido = document.getElementById('plato_cocido')

let movimiento = 0
let n_der = 2
let n_izq = 0
let rotar = 0

boton_der.addEventListener('click', () => {
    if (n_der != 0) {
        movimiento -= contenido.clientWidth
        contenido.style.transform = `translateX(${movimiento}px)`
        rotar -= 360 
        plato_albondigas.style.transform = `rotate(${rotar}deg)`
        plato_espaguetis.style.transform = `rotate(${rotar}deg)`
        plato_cocido.style.transform = `rotate(${rotar}deg)`
        n_der -= 1
        n_izq += 1
    } 
})

boton_izq.addEventListener('click', () => {
    if (n_izq != 0) {
        movimiento += contenido.clientWidth
        contenido.style.transform = `translateX(${movimiento }px)`
        rotar += 360 
        plato_albondigas.style.transform = `rotate(${rotar}deg)`
        plato_espaguetis.style.transform = `rotate(${rotar}deg)`
        plato_cocido.style.transform = `rotate(${rotar}deg)`
        n_der += 1
        n_izq -= 1
    }
})