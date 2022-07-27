// LOCAL STORAGE THEME

const claro = document.getElementById("claro")
const oscuro = document.getElementById("oscuro")

let infoLocalS

if(localStorage.getItem("theme")){
    infoLocalS = localStorage.getItem("theme")
} else{
    localStorage.setItem("theme", "claro")
}

if(infoLocalS == "oscuro"){
    document.body.classList.add("oscuro")
}

let divinfocolumnas = document.getElementsByClassName("infoColumn5x5")

oscuro.addEventListener("click", () =>{
    document.body.classList.add("oscuro")
    localStorage.setItem("theme", "oscuro")
})

claro.addEventListener("click", () =>{
    document.body.classList.remove("oscuro")
    localStorage.setItem("theme", "claro")
})




// creo una clase para crear Juegos Predeterminados

class JuegoPredeterminado{
    constructor(id,nombre,tablerojuego){
        this.id = id
        this.nombre = nombre
        this.tablerojuego = tablerojuego
        this.vidas = 5
    }
}

// Funcion que aumenta en uno el último elemento de un array, sirve para la funcion de Informacion Filas / Informacion columnas

function aumentarValorIndiceFinal(horizontal){
    let indiceFinal = horizontal.length - 1
    horizontal[indiceFinal]++
}

//Funcion que dice por cada fila del tablero, la cantidad de casilleros correlativos que deben pintarse, retorna un array con la info necesaria
function informacionFilas(objeto){
    let filaFiltrada
    let arrayFila = []
    for (let i=0 ; i< objeto.tablerojuego.length; i++){
        let fila = [0]
        for (let j=0 ; j<objeto.tablerojuego[i].length; j++){
            // si cada elemento del array que recorremos es un 0, pusheamos un 0 en un nuevo array, si es 1 se lo sumamos al último elemento del array
            if(objeto.tablerojuego[i][j] === 1){
                aumentarValorIndiceFinal(fila)
            }else{
                fila.push(0)
            }
        }
        // filtramos todos los elementos del array que el valor sea 0
        filaFiltrada = fila.filter(valor => valor != 0)
        // pusheo los arrays filtrados a arrayfila
        arrayFila.push(filaFiltrada)
    }
return arrayFila
}

//Funcion que dice por cada columna del tablero, la cantidad de casilleros correlativos que deben pintarse, retorna un array con la info necesaria, es bastante parecida a la funcion informacionFilas, solo que en vez de recorrer el array de una manera horizontal, lo recorrro de manera vertical.


function informacionColumnas(objeto){
    let columnaFiltrada
    let arrayColumna = []
    for (let i=0 ; i< objeto.tablerojuego.length; i++){
        let columna = [0]
        for (let j=0 ; j<objeto.tablerojuego[i].length; j++){
            if(objeto.tablerojuego[j][i] === 1){
                aumentarValorIndiceFinal(columna)
            }else{
                columna.push(0)
            }
        }
        columnaFiltrada = columna.filter(valor => valor != 0)
        arrayColumna.push(columnaFiltrada)
    }
return arrayColumna
}



// Creo una función para usar cuando el usuario quiera jugar un juego random ( no predeterminado ), el usuario podrá elegir cantidad de filas y columnas. en esta funcion solo creo el tablero
function crearTableroRandom (filas,columnas){
arrayTablero =[]
    for(let j = 0 ; j<filas; j++){
        let arrayfilas = []
    for(let i=0 ; i<columnas ; i++){
    const random = (Math.random())
    const redondeado = Math.round(random)
    arrayfilas.push(redondeado)
    }
    arrayTablero.push(arrayfilas)
    }
    return arrayTablero
}


let vidas = 5


// Funcion para mostrar en dom el juego
function dom (prueba, tablero, tamaño){

prueba.innerHTML +=`
    <h3>${tablero.nombre}</h3>
    <div class="gridTablero${tamaño}">
        <button class="boton botonVerde" id="boton"></button>
        <div class="infoColumn${tamaño}" id="infoColumn${tablero.id}" ></div>
        <div class="infoFilas${tamaño}"id="infoFilas${tablero.id}" ></div>
        <div class="casilleros${tamaño}"id="casilleros${tablero.id}"></div>
        <div class="reloj">
            <p id="minutos">00</p>
            <p id="segundos">: 00</p>
        </div>
        <div class="corazon"id="corazon"> </div>
    </div>
    <div id="resultado"></div>
    `
const infoColumn = document.getElementById(`infoColumn${tablero.id}`)
const infoFilas = document.getElementById(`infoFilas${tablero.id}`)
const casilleros = document.getElementById(`casilleros${tablero.id}`)

for(let i = 0 ; i<tablero.informacionColumnas.length ; i++){
    infoColumn.innerHTML +=`
    <p id="infoColumnp${i}">${tablero.informacionColumnas[i].join("")}</p>`
}

for(let i = 0 ; i<tablero.informacionFilas.length ; i++){
    infoFilas.innerHTML +=`
    <p id="infoFila${i}">${tablero.informacionFilas[i].join(" ")}</p>`
}

for(let i = 0 ; i <tablero.tablerojuego.length ; i++){
    for(let j = 0 ; j<tablero.tablerojuego[i].length ; j++){
        casilleros.innerHTML +=`
        <p class="celdas">${tablero.tablerojuego[i][j]}</p>
        `
    }
}

}


// creo un tablero random para ver si funciona
let tableroRandom = crearTableroRandom(5,5) 
const juegoRandom = new JuegoPredeterminado(1000, "random", tableroRandom)
juegoRandom.informacionFilas = informacionFilas(juegoRandom)
juegoRandom.informacionColumnas = informacionColumnas(juegoRandom)



//creo tableros predeterminados
const tablero1_5x5 = new JuegoPredeterminado (1, "castle", [
    [1,0,1,0,1],
    [0,1,1,1,0],
    [0,1,1,1,0],
    [0,1,1,1,0],
    [0,1,0,1,0]])

tablero1_5x5.informacionFilas = informacionFilas(tablero1_5x5)
tablero1_5x5.informacionColumnas = informacionColumnas(tablero1_5x5)




const tablero2_5x5 = new JuegoPredeterminado (2, "button", [
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,0,1],
    [1,1,1,1,1],
    [0,1,1,1,0]])

tablero2_5x5.informacionFilas = informacionFilas(tablero2_5x5)
tablero2_5x5.informacionColumnas = informacionColumnas(tablero2_5x5)

const tablero3_5x5 = new JuegoPredeterminado (3, "pause", [
    [1,1,1,1,1],
    [1,0,1,0,1],
    [1,0,1,0,1],
    [1,0,1,0,1],
    [1,1,1,1,1]])

tablero3_5x5.informacionFilas = informacionFilas(tablero3_5x5)
tablero3_5x5.informacionColumnas = informacionColumnas(tablero3_5x5)

const tablero4_5x5 = new JuegoPredeterminado (4, "crab", [
    [1,0,0,0,1],
    [1,1,1,1,1],
    [0,1,1,1,0],
    [1,1,0,1,1],
    [1,0,0,0,1]])

tablero4_5x5.informacionFilas = informacionFilas(tablero4_5x5)
tablero4_5x5.informacionColumnas = informacionColumnas(tablero4_5x5)


const tablero5_5x5 = new JuegoPredeterminado (5, "kiss", [
    [0,0,0,0,0],
    [0,1,0,1,0],
    [1,1,1,1,1],
    [0,1,1,1,0],
    [0,0,0,0,0]])

tablero5_5x5.informacionFilas = informacionFilas(tablero5_5x5)
tablero5_5x5.informacionColumnas = informacionColumnas(tablero5_5x5)


let arrayJuegos5x5 = [tablero1_5x5,tablero2_5x5,tablero3_5x5,tablero4_5x5,tablero5_5x5]

const tablero1_10x10 = new JuegoPredeterminado(6, "egypt", [
    [1,0,0,0,0,0,0,0,0,0],
    [1,1,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,1],
    [0,0,1,0,0,0,0,0,1,1],
    [0,1,1,1,0,0,0,1,1,1],
    [1,1,1,1,1,0,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1]])

    tablero1_10x10.informacionFilas = informacionFilas(tablero1_10x10)
    tablero1_10x10.informacionColumnas = informacionColumnas(tablero1_10x10)




// A HREF PARA LUEGO MOSTRAR EN DOM
// para elegir juegos 5x5
// const divLista5x5 = document.getElementById("lista5x5")
// arrayJuegos5x5.forEach(juego => {
//     divLista5x5.innerHTML += `
//     <a href="#"> ${juego.nombre} </a>
// `
// })


// creo constantes de divs que tengo en el HTML

const prueba0 = document.getElementById("prueba0") // Random
const prueba1 = document.getElementById("prueba1") // Castle
const prueba2 = document.getElementById("prueba2") // Button
const prueba3 = document.getElementById("prueba3") // Pause
const prueba4 = document.getElementById("prueba4") // Crab
const prueba5 = document.getElementById("prueba5") // Kiss
const prueba6 = document.getElementById("prueba6") // Egypt


// aplico la funcion DOM, para que mis tableros se muestren en el HTML solo en el caso que se encuentre el Div

if(prueba0 != null){
    dom(prueba0, juegoRandom, "5x5")
    marcarTableroYContarVidas()
}


if(prueba1 != null){
    dom(prueba1, tablero1_5x5, "5x5")
}



if(prueba2 != null){
    dom(prueba2, tablero2_5x5, "5x5")
}



if(prueba3 != null){
    dom(prueba3, tablero3_5x5, "5x5")
}


if(prueba4 != null){
    dom(prueba4, tablero4_5x5, "5x5")
}



if(prueba5 != null){
    dom(prueba5, tablero5_5x5, "5x5")
}



if(prueba6 != null){
    dom(prueba6, tablero1_10x10, "10x10")
}


// CREO BOTON PARA INTERCAMBIAR FUNCIONES DEL MOUSE

const boton = document.getElementById("boton")
if(boton != null){
    boton.addEventListener("click", () => {
    if(boton.classList[1] == "botonVerde"){
        boton.classList.remove("botonVerde")
    } else{
        boton.classList.add("botonVerde")
    }
})
}


// TRAIGO A JS ELEMENTOS DEL DOM

const p = document.getElementsByClassName("celdas")
const vidasP = document.getElementById("vidas")
let resultado = document.getElementById("resultado")
let infoFila0 = document.getElementById("infoFila0")
let infoFila1 = document.getElementById("infoFila1")
let infoFila2 = document.getElementById("infoFila2")
let infoFila3 = document.getElementById("infoFila3")
let infoFila4 = document.getElementById("infoFila4")
let infoColumnp0 = document.getElementById("infoColumnp0")
let infoColumnp1 = document.getElementById("infoColumnp1")
let infoColumnp2 = document.getElementById("infoColumnp2")
let infoColumnp3 = document.getElementById("infoColumnp3")
let infoColumnp4 = document.getElementById("infoColumnp4")


// CREO VERIFICACIONES DE CELDAS CLICKEADAS, SI VALE 0 O SI VALE 1 Y ESTÁ ACTIVO.. DE FILAS Y COLUMNAS, LUEJO LO EJECUTO TODO JUNTO EN OTRA FUNCION



function verificacionF5(desde, hasta, datodom){
    let condicion = []
    let filtrado 
    for(let i = desde ; i < hasta ; i++){
        if((p[i].innerText == 1 && p[i].classList[1] == "activo") || (p[i].innerText == 0 )){
            condicion.push("listo")
        }
    }
    filtrado = condicion.filter(valor => valor == "listo")
    if(filtrado.length == 5){
        datodom.innerText = `✓`
        
    }
}


function verificacionC5(desde, hasta, datodom){
    let condicion = []
    let filtrado
    for(let i = desde ; i < hasta ; i = i + 5){
        if((p[i].innerText == 1 && p[i].classList[1] == "activo") || (p[i].innerText == 0 )){
            condicion.push("listo")
        }
    }
    filtrado = condicion.filter(valor => valor == "listo")
    if(filtrado.length == 5){
        datodom.innerText = `✓`
    }
}

function verificacionFYC(){
    verificacionF5(0, 5, infoFila0)
    verificacionF5(5, 10, infoFila1)
    verificacionF5(10, 15, infoFila2)
    verificacionF5(15, 20, infoFila3)
    verificacionF5(20, 25, infoFila4)


    verificacionC5(0, 25, infoColumnp0)
    verificacionC5(1, 25, infoColumnp1)
    verificacionC5(2, 25, infoColumnp2)
    verificacionC5(3, 25, infoColumnp3)
    verificacionC5(4, 25, infoColumnp4)
}


// FUNCION PARA SABER CUANDO EL USUARIO GANÓ
function ganar(){
    if (infoColumnp0.innerText == `✓` && 
        infoColumnp1.innerText == `✓` && 
        infoColumnp2.innerText == `✓` && 
        infoColumnp3.innerText == `✓` && 
        infoColumnp4.innerText == `✓`){
        resultado.innerText = `GANASTE`
    }
}




// Creo las "vidas"

const corazonesDiv = document.getElementById("corazon")

function mostrarVidas(){
    switch(vidas){
    case 5 :
        corazonesDiv.innerHTML = `
        <img src="../../assets/vidas.png" alt="">
        <img src="../../assets/vidas.png" alt="">
        <img src="../../assets/vidas.png" alt="">
        <img src="../../assets/vidas.png" alt="">
        <img src="../../assets/vidas.png" alt="">
        `
    break
    case 4 :
        corazonesDiv.innerHTML = `
        <img src="../../assets/vidas.png" alt="">
        <img src="../../assets/vidas.png" alt="">
        <img src="../../assets/vidas.png" alt="">
        <img src="../../assets/vidas.png" alt="">
        <img src="../../assets/sinvida.png" alt="">
        `
    break
    case 3 :
        corazonesDiv.innerHTML = `
        <img src="../../assets/vidas.png" alt="">
        <img src="../../assets/vidas.png" alt="">
        <img src="../../assets/vidas.png" alt="">
        <img src="../../assets/sinvida.png" alt="">
        <img src="../../assets/sinvida.png" alt="">
        `
    break
    case 2 :
        corazonesDiv.innerHTML = `
        <img src="../../assets/vidas.png" alt="">
        <img src="../../assets/vidas.png" alt="">
        <img src="../../assets/sinvida.png" alt="">
        <img src="../../assets/sinvida.png" alt="">
        <img src="../../assets/sinvida.png" alt="">
        `
    break
    case 1 :
        corazonesDiv.innerHTML = `
        <img src="../../assets/vidas.png" alt="">
        <img src="../../assets/sinvida.png" alt="">
        <img src="../../assets/sinvida.png" alt="">
        <img src="../../assets/sinvida.png" alt="">
        <img src="../../assets/sinvida.png" alt="">
        `
    break
    case 0 :
        corazonesDiv.innerHTML = `
        <img src="../../assets/sinvida.png" alt="">
        <img src="../../assets/sinvida.png" alt="">
        <img src="../../assets/sinvida.png" alt="">
        <img src="../../assets/sinvida.png" alt="">
        <img src="../../assets/sinvida.png" alt="">
        `
    break
}
}

// FUNCION PARA aplicar escuchadores en todos los P, NO ES DEFINITIVO, SON PRUEBAS

function marcarTableroYContarVidas(a,b){
    for(let i = 0 ; i<a*b; i++){
        verificacionFYC()
        mostrarVidas()
        
        p[i].addEventListener("click", () => {
            if((resultado.innerText != `GANASTE`) && (resultado.innerText != `PERDISTE`)){
                if(boton.classList[1] != "botonVerde"){
                    if(p[i].classList[1] == "gris"){
                        p[i].classList.remove("gris")
                    } else{
                        p[i].classList.add("gris")
                    }
                }else {
                    if(p[i].innerText == 1){
                        p[i].classList.remove("gris")
                        p[i].classList.add("activo")
                        verificacionFYC()
                        ganar()
                    } else{
                        p[i].classList.add("cambiarColorIncorrecto")
                        vidas --
                        mostrarVidas()
                    }
                }
                if(vidas <= 0){
                resultado.innerText = `PERDISTE`
                }
            }
        })
    }
}





marcarTableroYContarVidas(5,5)



// CRONOMETRO

let segundosP = document.getElementById("segundos")
let minutosP = document.getElementById("minutos")
function reloj (){
    let segundos = 00
    let minutos = 00
    
    let contar = function(){
        segundos++
        // si el contador de segundos llega a 60 que se '0nga de nuevo en 0 y sume 1 en minutos
        if (segundos == 60){
            segundos = 0
            minutos++
            // si minutos es menor a 10 agregar un 0 antes en el dom
            if(minutos < 10){
                minutosP.innerText = `: 0${segundos}`
            }else{
                minutosP.innerText = `: ${segundos}`
            }
            minutosP.innerText = `${minutos} `
        }
        // si segundos es menor a 10 agregar un 0 antes en el dom
        if(segundos < 10){
            segundosP.innerText = `: 0${segundos}`
        }else{
            segundosP.innerText = `: ${segundos}`
        }
        
        if((resultado.innerText == `GANASTE`) || (resultado.innerText == `PERDISTE`)){
        clearInterval(intervalo)
        console.log(`${minutos} : ${segundos}`)
        }
    }
    
    let intervalo = setInterval(contar, 1000)

}

reloj()