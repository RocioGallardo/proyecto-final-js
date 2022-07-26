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
<div class="infoColumn${tamaño}" id="infoColumn${tablero.id}" ></div>
<div class="infoFilas${tamaño}"id="infoFilas${tablero.id}" ></div>
<div class="casilleros${tamaño}"id="casilleros${tablero.id}" ></div>
</div>
<button id="boton">verde</button>
<p id="vidas">${vidas} vidas</p>
<div id= "resultado"></div>
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
        <p class="escuchadorP">${tablero.tablerojuego[i][j]}</p>
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
boton.addEventListener("click", () => {
    if(boton.innerText == "verde"){
        boton.innerText = "cruz"
    } else{
        boton.innerText = "verde"
    }
})

// TRAIGO A JS ELEMENTOS DEL DOM

const p = document.getElementsByClassName("escuchadorP")
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



function ganar(){
    if (infoColumnp0.innerText == `✓` && 
        infoColumnp1.innerText == `✓` && 
        infoColumnp2.innerText == `✓` && 
        infoColumnp3.innerText == `✓` && 
        infoColumnp4.innerText == `✓`){
        resultado.innerText = `GANASTE`
    }
}



// FUNCION PARA aplicar escuchadores en todos los P, NO ES DEFINITIVO, SON PRUEBAS

function marcarTableroYContarVidas(a,b){
    for(let i = 0 ; i<a*b; i++){
        verificacionFYC()
        p[i].addEventListener("click", () => {
            if((resultado.innerText != `GANASTE`) && (resultado.innerText != `PERDISTE`)){
                if(boton.innerText == "cruz"){
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
                        vidasP.innerText = `${vidas} vidas`
                    }
                }
                if(vidas <= 0){
                    vidasP.innerText = ``
                resultado.innerText = `PERDISTE`
                }
            }
        })
    }
}




marcarTableroYContarVidas(5,5)





// do{
//     console.log("todaviano")
//     
// } while(resultado.innerText != `PERDISTE` || resultado.innerText != `GANASTE`) 






/*if(((p[0].innerText == 1 && p[0].classList[1] == "activo") || (p[0].innerText == 0)) && 
((p[1].innerText == 1 && p[1].classList[1] == "activo") || (p[1].innerText == 0))&& 
((p[2].innerText == 1 && p[2].classList[1] == "activo") || (p[2].innerText == 0))&& 
((p[3].innerText == 1 && p[3].classList[1] == "activo") || (p[3].innerText == 0))&& 
((p[4].innerText == 1 && p[4].classList[1] == "activo") || (p[4].innerText == 0))){
    console.log("fila 0 terminada")
    pInfoFila0.innerText += ` ✓`
}



// p[0].addEventListener("click", () => {
//     if(p[0].innerText == 1){
//         p[0].classList.add("cambiarColorCorrecto")
//     } else {
//         p[0].classList.add("cambiarColorIncorrecto")
//     }
// })

// p[1].addEventListener("click", () => {
//     if(p[1].innerText == 1){
//         p[1].classList.add("cambiarColorCorrecto")
//     } else {
//         p[1].classList.add("cambiarColorIncorrecto")
//     }
// })

// p[2].addEventListener("click", () => {
//     if(p[2].innerText == 1){
//         p[2].classList.add("cambiarColorCorrecto")
//     } else {
//         p[2].classList.add("cambiarColorIncorrecto")
//     }
// })

// p[3].addEventListener("click", () => {
//     if(p[3].innerText == 1){
//         p[3].classList.add("cambiarColorCorrecto")
//     } else {
//         p[3].classList.add("cambiarColorIncorrecto")
//     }
// })

// p[4].addEventListener("click", () => {
//     if(p[4].innerText == 1){
//         p[4].classList.add("cambiarColorCorrecto")
//     } else {
//         p[4].classList.add("cambiarColorIncorrecto")
//     }
// })
// p[5].addEventListener("click", () => {
//     if(p[5].innerText == 1){
//         p[5].classList.add("cambiarColorCorrecto")
//     } else {
//         p[5].classList.add("cambiarColorIncorrecto")
//     }
// })



// botonDarkMode.addEventListener("click", () => {
//     // document.body.style.backgroundColor = "#000"
//     // document.body.style.color = "#fff"
//     document.body.classList.add('darkMode')
//     localStorage.setItem('theme', "dark")  
//  })
//  botonLightMode.addEventListener('click', () => {
//      //document.body.style.backgroundColor = "#fff"
//      //document.body.style.color = "#000"
//      document.body.classList.remove('darkMode')
//      localStorage.setItem('theme', "light")  
//  })





/*
const divCadaJuego = document.getElementById("cadaJuego")
const tableroCadaJuego = document.getElementById("tableroCadaJuego")


for(let i = 0; i< arrayJuegos5x5.length; i++){
    divCadaJuego.innerHTML += `
    <div>
        <h2>${arrayJuegos5x5[i].nombre}</h2>
        <div id="infoColumns">
            <div>${arrayJuegos5x5[i].informacionColumnas[0]}</div>
            <div>${arrayJuegos5x5[i].informacionColumnas[1]}</div>
            <div>${arrayJuegos5x5[i].informacionColumnas[2]}</div>
            <div>${arrayJuegos5x5[i].informacionColumnas[3]}</div>
            <div>${arrayJuegos5x5[i].informacionColumnas[4]}</div>
        </div>
        <div id="infoFilas">
            <div>${arrayJuegos5x5[i].informacionFilas[0]}</div>
            <div>${arrayJuegos5x5[i].informacionFilas[1]}</div>
            <div>${arrayJuegos5x5[i].informacionFilas[2]}</div>
            <div>${arrayJuegos5x5[i].informacionFilas[3]}</div>
            <div>${arrayJuegos5x5[i].informacionFilas[4]}</div>
        </div>    
        <div id="tableroTotal">
        </div>
    </div>
    `
    
    console.log(arrayJuegos5x5[0].tablerojuego[0])
    // console.log(arrayJuegos5x5[0].tablerojuego[1])
    // console.log(arrayJuegos5x5[0].tablerojuego[2])
    // console.log(arrayJuegos5x5[0].tablerojuego[3])
    // console.log(arrayJuegos5x5[0].tablerojuego[4])<p> ${arrayJuegos5x5[i].tablerojuego}</p>
}



for(let i = 0 ; i<5; i++){
    const tableroTotal = document.getElementById("tableroTotal")
    tableroTotal.innerHTML +=`
    <div class="fila${i} "id="fila${i}"></div>`
    const fila0 = document.getElementById("fila0")
    const fila1 = document.getElementById("fila1")
    const fila2 = document.getElementById("fila2")
    const fila3 = document.getElementById("fila3")
    const fila4 = document.getElementById("fila4")
    
}
for(let a = 0 ; a<5; a++){
    fila0.innerHTML += `
    <p id="celda${0}${a}"id="celdas"></p>`
}
for(let a = 0 ; a<5; a++){
    fila1.innerHTML += `
    <p id="celda${1}${a}"id="celdas"></p>`
}
for(let a = 0 ; a<5; a++){
    fila2.innerHTML += `
    <p id="celda${2}${a}"id="celdas"></p>`
}
for(let a = 0 ; a<5; a++){
    fila3.innerHTML += `
    <p id="celda${3}${a}"id="celdas"></p>`
}
for(let a = 0 ; a<5; a++){
    fila4.innerHTML += `
    <p id="celda${4}${a}"id="celdas"></p>`
}

let celda00 = document.getElementById("celda00")
let celda01 = document.getElementById("celda01")
let celda02 = document.getElementById("celda02")
let celda03 = document.getElementById("celda03")
let celda04 = document.getElementById("celda04")
let celda05 = document.getElementById("celda05")
let celda06 = document.getElementById("celda06")
let celda07 = document.getElementById("celda07")
let celda08 = document.getElementById("celda08")
let celda09 = document.getElementById("celda09")
let celda10 = document.getElementById("celda10")
let celda11 = document.getElementById("celda11")
let celda12 = document.getElementById("celda12")
let celda13 = document.getElementById("celda13")
let celda14 = document.getElementById("celda14")
let celda15 = document.getElementById("celda15")
let celda16 = document.getElementById("celda16")
let celda17 = document.getElementById("celda17")
let celda18 = document.getElementById("celda18")
let celda19 = document.getElementById("celda19")
let celda20 = document.getElementById("celda20")
let celda21 = document.getElementById("celda21")
let celda22 = document.getElementById("celda22")
let celda23 = document.getElementById("celda23")
let celda24 = document.getElementById("celda24")
let celda25 = document.getElementById("celda25")


function funcionCeldas (celda, a, b ,c){
    celda.innerHTML +=`
${arrayJuegos5x5[a].tablerojuego[b][c]}`
}
funcionCeldas(celda00, 0, 0, 0)
funcionCeldas(celda01, 0, 0, 1)
funcionCeldas(celda02, 0, 0, 2)
funcionCeldas(celda03, 0, 0, 3)
funcionCeldas(celda04, 0, 0, 4)
funcionCeldas(celda10, 0, 1, 0)
funcionCeldas(celda11, 0, 1, 1)
funcionCeldas(celda12, 0, 1, 2)
funcionCeldas(celda13, 0, 1, 3)
funcionCeldas(celda14, 0, 1, 4)







    // for(let a =0; a<arrayJuegos5x5[i].tablerojuego[i].length; a++){
    //         celdasTablero.innerHTML +=`
    //         <div>${arrayJuegos5x5[i].tablerojuego[a]}</div>
    //         `
    // }

/*

        <div class="fila">
            <div>${arrayJuegos5x5[i].tablerojuego[0][0]}</div>
            <div>${arrayJuegos5x5[i].tablerojuego[0][1]}</div>
            <div>${arrayJuegos5x5[i].tablerojuego[0][2]}</div>
            <div>${arrayJuegos5x5[i].tablerojuego[0][3]}</div>
            <div>${arrayJuegos5x5[i].tablerojuego[0][4]}</div>
        </div>
        <div class="fila">
            <div>${arrayJuegos5x5[i].tablerojuego[1][0]}</div>
            <div>${arrayJuegos5x5[i].tablerojuego[1][1]}</div>
            <div>${arrayJuegos5x5[i].tablerojuego[1][2]}</div>
            <div>${arrayJuegos5x5[i].tablerojuego[1][3]}</div>
            <div>${arrayJuegos5x5[i].tablerojuego[1][4]}</div>
        </div>
        <div class="fila">
            <div>${arrayJuegos5x5[i].tablerojuego[2][0]}</div>
            <div>${arrayJuegos5x5[i].tablerojuego[2][1]}</div>
            <div>${arrayJuegos5x5[i].tablerojuego[2][2]}</div>
            <div>${arrayJuegos5x5[i].tablerojuego[2][3]}</div>
            <div>${arrayJuegos5x5[i].tablerojuego[2][4]}</div>
        <div class="fila">
        </div>
            <div>${arrayJuegos5x5[i].tablerojuego[3][0]}</div>
            <div>${arrayJuegos5x5[i].tablerojuego[3][1]}</div>
            <div>${arrayJuegos5x5[i].tablerojuego[3][2]}</div>
            <div>${arrayJuegos5x5[i].tablerojuego[3][3]}</div>
            <div>${arrayJuegos5x5[i].tablerojuego[3][4]}</div>
        </div>
        <div class="fila">
            <div>${arrayJuegos5x5[i].tablerojuego[4][0]}</div>
            <div>${arrayJuegos5x5[i].tablerojuego[4][1]}</div>
            <div>${arrayJuegos5x5[i].tablerojuego[4][2]}</div>
            <div>${arrayJuegos5x5[i].tablerojuego[4][3]}</div>
            <div>${arrayJuegos5x5[i].tablerojuego[4][4]}</div>
        </div>




arrayJuegos5x5.forEach(juego => {
    divCadaJuego.innerHTML += `
    <div>
    <h2>${juego.nombre}</h2>
    
    <div id="tableroCadaJuego">
    <div id="infoColumns"></div>
    <div id="div${juego.id}">
    </div>
    </div>
    </div>
    `
    const infoColumns = document.getElementById("infoColumns")
    for(let i = 0; i<5; i++){
        infoColumns.innerHTML +=`
        <div>${juego.informacionColumnas[i]}</div>
        `
    }
    console.log(juego.informacionColumnas.length)
})
console.log(arrayJuegos5x5[0].informacionColumnas.length)





for(let i = 0; i< arrayJuegos5x5.length; i++){
    for(let j = 0; j<arrayJuegos5x5[i].informacionColumnas.length; j++){
        console.log(arrayJuegos5x5[i].informacionColumnas[j])
        infoColumns.innerHTML +=`
        <div>${arrayJuegos5x5[i].informacionColumnas[j]}</div>
        `
    }
}

const juego1 = document.getElementById("div1")
for (let i = 0 ; i<platos[0].ingredientes.length; i++){
    juego1.innerHTML += `
    <div>${platos[0].ingredientes[i]}</div>
    `
}






console.log(arrayJuegos5x5)
console.log(arrayJuegos5x5[0])
console.log(arrayJuegos5x5[0].informacionColumnas)
console.log(arrayJuegos5x5[0].informacionColumnas[0])









//crer juego random
// function crearTableroRandom(columnas, filas){
//     arrayTablero= []
//     for(let j=0 ; j=filas; j++){
//         let arrayfilas = []
//         for(let i=0 ; i<columnas ; i++){
//         const random = (Math.random())
//         const redondeado = Math.round(random)
//         arrayfilas.push(redondeado)
//         }
//         arrayTablero.push(arrayfilas)
//     }
// }

//crearTableroRandom(2,2)














/* 

const divInfoColumnas = document.getElementById("divInfoColumnas")
for (let i = 0 ; i<tablero1_5x5.informacionColumnas.length; i++){
    divInfoColumnas.innerHTML +=`
    <p class="pInfo" >${tablero1_5x5.informacionColumnas[i]}</p>
    `
} 
const divValorFila1 = document.getElementById("divValorFila1")
for (let i = 0 ; i<tablero1.valorFila1.length; i++){
    divValorFila1.innerHTML +=`
    <div class="celda " id:"a${i}" >${tablero1.valorFila1[i]}</div>
    `
}
const divValorFila2 = document.getElementById("divValorFila2")
for (let i = 0 ; i<tablero1.valorFila2.length; i++){
    divValorFila2.innerHTML +=`
    <div class="celda b${i}" >${tablero1.valorFila2[i]}</div>
    `
}
const divValorFila3 = document.getElementById("divValorFila3")
for (let i = 0 ; i<tablero1.valorFila3.length; i++){
    divValorFila3.innerHTML +=`
    <div class="celda c${i}" >${tablero1.valorFila3[i]}</div>
    `
}
const divValorFila4 = document.getElementById("divValorFila4")
for (let i = 0 ; i<tablero1.valorFila4.length; i++){
    divValorFila4.innerHTML +=`
    <div class="celda d${i}" >${tablero1.valorFila4[i]}</div>
    `
}
const divValorFila5 = document.getElementById("divValorFila5")
for (let i = 0 ; i<tablero1.valorFila5.length; i++){
    divValorFila5.innerHTML +=`
    <div class="celda e${i}" >${tablero1.valorFila5[i]}</div>
    `
}

function cambiarColorCorrecto(){
    inner.classList.add("cambiarColorCorrecto")
}

function cambiarColorIncorrecto(){
    inner.classList.add("cambiarColorIncorrecto")
}








const button = new JuegoPredeterminado (2, "Button", [
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,0,1],
    [1,1,1,1,1],
    [0,1,1,1,0]],)
informacionFilas(button)





console.log(button)







function mostrartablero(nombreobjeto){
    let arrayFila = []
    let fila = [0]
    for (let i=0 ; i< nombreobjeto.tablero.length; i++){
        for (let j=0 ; j<nombreobjeto.tablero[i].length; j++){
            if(tablero[i][j] === 1){
                aumentarValorIndiceFinal(fila)
            } else if (nombreobjeto.tablero[i][j-1] != null && nombreobjeto.tablero[i][j+1] === 1){
                fila.push(0)
            } else if (nombreobjeto.tablero[i][j+1] === null){
                fila.pop(0)
            }
        }
        arrayFila.push(fila)
    }
    console.log(arrayFila)
}






mostrartablero(tableroA5X5)
mostrartablero(button)




let tablero = [
                [1,0,0,0,1], 
                [1,1,1,1,1],
                [0,1,1,1,0], 
                [1,1,0,1,1], 
                [1,0,0,0,1]
]

let arrayFila1 = []
for (let i=0 ; i< tablero.length; i++){
    let fila = [0]
    for (let j=0 ; j<tablero[i].length; j++){
        if(tablero[i][j] === 1){
            aumentarValorIndiceFinal(fila)
        } else if (tablero[i][j-1] != null && tablero[i][j+1] === 1){
            fila.push(0)
        } else if (tablero[i][j+1] === null){
            fila.pop(0)
        }
    }
    arrayFila1.push(fila)
    
}
console.log(arrayFila1)



for (let i=0 ; i< tablero.length; i++){
    let fila = [0]
    for (let j=0 ; j<tablero[i].length; j++){
        if(tablero[i][j] === 1){
            aumentarValorIndiceFinal(fila)
        } else if (tablero[i][j-1] != null && tablero[i][j+1] === 1){
            fila.push(0)
        } else if (tablero[i][j+1] === null){
            fila.pop(0)
        }
    }
    console.log(i, fila)
} */



// 1 0 0 0 1
// 1 1 1 1 1
// 0 1 1 1 0
// 1 1 0 1 1
// 1 0 0 0 1



/* for (let i=0 ; i< tablero.length; i++){
    let fila = [0]
    for (let j=0 ; j<tablero[i].length; j++){
        if(tablero[j][i] === 1){
            aumentarValorIndiceFinal(fila)
        } else if (tablero[j-1][i] != null && tablero[j+1][i] === 1){
            fila.push(0)
        } else if (j === tablero.length){
            fila.pop(0)
        }
    }
    console.log(i, fila)
} 


let array =[]
let j = 4
if (j+1 === tablero.length){
    array.push(0)
}
console.log(array)









// let columna = [0]



// for (let j=0 ; j<tablero[i].length; j++){
//     if(tablero[0][1] === 1){
//         aumentarValorIndiceFinal(columna)
//     } else if (tablero[0-1][1] != null && tablero[1][1] === 1){
//         columna.push(0)
//     } else if (tablero[4][1] === null){
//         columna.pop(0)
//     }
// }




// for (let i=0 ; i< tablero[i].length; i++){
//     let columna = [0]
//     for (let j=0 ; j<tablero[i].length; j++){
//         if(tablero[i][j] === 1){
//             aumentarValorIndiceFinal(columna)
//         } else if (tablero[i--][j] != null && tablero[i++][j] === 1){
//             columna.push(0)
//         } else if (tablero[i++][j] === null){
//             columna.pop(0)
//         }
//     }
//     console.log(i, columna)
// }













// CUIDAR COMO ORO
// for (let i = 0 ; i < tablero[0].length; i++){
//     if(tablero[0][i]=== 1){
//         aumentarValorIndiceFinal(horizontalA)
//     } else if (tablero[0][i]=== 0  && tablero[0][i+1] === 1){
//         horizontalA.push(0)
//     } else if (tablero[0][i+1] === null){
//         horizontalA.pop(0)
//     }
// }
// console.log(horizontalA)







/*
for (let i = 0 ; i < tablero[0].length; i++){
    if(tablero[0][i]=== tablero[0][i+1]){
        console.log(`se repite ${tablero[0][i]}`)
    }
}*/




/* 

let letras = [["a", "b"],["c", "d"]]

for(let i=0 ; i< letras.length; i++){
    for (let j=0 ; j<letras[i].length; j++){
        console.log(i, j, letras[i][j])
    }
}

for(let i=0 ; i< letras.length; i++){
    for (let j=0 ; j<letras[i].length; j++){
        console.log(i, j, letras[j][i])
    }
}




/*if(tablero[0][0] === 1){
    horizontal1.push(1)
} else{
    horizontal1.push(0)
    if(tablero[0][1]=== 1 ){
        horizontal1[0]++
        if(tablero[0][2]===1){
            horizontal1[0]++
        }
    }
    if(tablero[0][2]=== 1 ){
        horizontal1[0]++
    }
    if(tablero[0][3]=== 1 ){
        horizontal1[0]++
    }
    if(tablero[0][4]=== 1 ){
        horizontal1[0]++
    }
}


for(let i=0 ; i< tablero.length; i++){
    for (let j=0 ; j<tablero[i].length; j++){
        console.log(i, j, tablero[i][j])
    }
}


 */

//necesito que los numero 1 se sumen si son contiguos
/*

*/

//  0 0 0 1 1 
//  1 0 1 0 1 
//  1 1 0 1 1
//  1 1 1 1 1
//  0 0 0 0 1
//  0 0 0 0 0 






/*class Tablero5x5{
    constructor(id, nombre, informacionSobreColumnas, informacionSobreFilas, valorFila1 , valorFila2, valorFila3, valorFila4, valorFila5){
        this.id= id
        this.nombre = nombre
        this.informacionSobreColumnas = informacionSobreColumnas
        this.informacionSobreFilas = informacionSobreFilas
        this.valorFila1 = valorFila1
        this.valorFila2 = valorFila2
        this.valorFila3 = valorFila3
        this.valorFila4 = valorFila4
        this.valorFila5 = valorFila5
    }
}



const tablero1 = new Tablero5x5(1,"Castle",["1", "4", "4", "4", "1"],["1 1 1", "3", "3", "3", "1 1"], [1, 0, 1, 0, 1],[0,1,1,1,0], [0,1,1,1,0], [0,1,1,1,0], [0,1,0,1,0] )
const tablero2 = new Tablero5x5(2, "Button",["3", "2 2", "5", "2 2", "3"],["3", "5", "1 1 1", "5", "3"], [0, 1, 1, 1, 0],[1,1,1,1,1], [1,0,1,0,1], [1,1,1,1,1], [0,1,1,1,0] )
const tablero3 = new Tablero5x5(3, "Pause",["5", "1 1", "5", "1 1", "5"],["5", "1 1 1", "1 1 1", "1 1 1", "5"], [1, 1, 1, 1, 1],[1,0,1,0,1], [1,0,1,0,1], [1,0,1,0,1], [1,1,1,1,1] )

const arrayTableros5x5 = [tablero1, tablero2, tablero3]

const divTablero = document.getElementById("tablero")
for (let tablero of arrayTableros5x5){
    divTablero.innerHTML +=`
    <h3>${tablero.nombre}</h3>
    <div id="divInfoColumnas"></div>
    <div id="divValorFila1">
    <p class="pInfo" >${tablero.informacionSobreFilas[0]}</p>
    </div>
    <div id="divValorFila2">
    <p class="pInfo" >${tablero.informacionSobreFilas[1]}</p>
    </div>
    <div id="divValorFila3">
    <p class="pInfo" >${tablero.informacionSobreFilas[2]}</p>
    </div>
    <div id="divValorFila4">
    <p class="pInfo" >${tablero.informacionSobreFilas[3]}</p>
    </div>
    <div id="divValorFila5">
    <p class="pInfo" >${tablero.informacionSobreFilas[4]}</p>
    </div>
    `

}

const divInfoColumnas = document.getElementById("divInfoColumnas")
for (let i = 0 ; i<tablero1.informacionSobreColumnas.length; i++){
    divInfoColumnas.innerHTML +=`
    <p class="pInfo" >${tablero1.informacionSobreColumnas[i]}</p>
    `
} 
const divValorFila1 = document.getElementById("divValorFila1")
for (let i = 0 ; i<tablero1.valorFila1.length; i++){
    divValorFila1.innerHTML +=`
    <div class="celda " id:"a${i}" >${tablero1.valorFila1[i]}</div>
    `
}
const divValorFila2 = document.getElementById("divValorFila2")
for (let i = 0 ; i<tablero1.valorFila2.length; i++){
    divValorFila2.innerHTML +=`
    <div class="celda b${i}" >${tablero1.valorFila2[i]}</div>
    `
}
const divValorFila3 = document.getElementById("divValorFila3")
for (let i = 0 ; i<tablero1.valorFila3.length; i++){
    divValorFila3.innerHTML +=`
    <div class="celda c${i}" >${tablero1.valorFila3[i]}</div>
    `
}
const divValorFila4 = document.getElementById("divValorFila4")
for (let i = 0 ; i<tablero1.valorFila4.length; i++){
    divValorFila4.innerHTML +=`
    <div class="celda d${i}" >${tablero1.valorFila4[i]}</div>
    `
}
const divValorFila5 = document.getElementById("divValorFila5")
for (let i = 0 ; i<tablero1.valorFila5.length; i++){
    divValorFila5.innerHTML +=`
    <div class="celda e${i}" >${tablero1.valorFila5[i]}</div>
    `
}

function cambiarColorCorrecto(){
    inner.classList.add("cambiarColorCorrecto")
}

function cambiarColorIncorrecto(){
    inner.classList.add("cambiarColorIncorrecto")
}



const a0 = document.getElementById("a0")
console.log(a0)

const inner = document.getElementById("inner")
console.log(inner)
console.log(inner.innerText)

inner.addEventListener("click", () =>{
    if(inner.innerText == "Hola inner"){
        cambiarColorCorrecto()
    } else{
        cabiarColorIncorrecto()
    }

})









/*for (let plato of platos){
    divPlatos.innerHTML += `
    <div class="div-plato">
    <h3>${plato.titulo}</h3>
    <img src="${plato.imagen}" alt="">
    <ul id="ul${plato.id}">
    </ul>
    </div>
    `
}
const ul1 = document.getElementById("ul1")
for (let i = 0 ; i<platos[0].ingredientes.length; i++){
    ul1.innerHTML += `
    <li>${platos[0].ingredientes[i]}</li>
    `
}








class MedidaTablero {
    constructor(filas, columnas){
        this.filas = filas
        this.columnas = columnas
    }
    crearTablero(){
        for (let f = 0 ; f < this.filas; f++){
            contadorFilaYColumna += `<div id="div${f}">`
            for(let c = 0 ; c < this.columnas; c++){
                contadorFilaYColumna += `<div id="div${c}"></div> ` 
            }
            contadorFilaYColumna+= `</div>`
    }
}
}


const medidaTablero1 = new MedidaTablero (5,5)
medidaTablero1.crearTablero


/*for(let f = 0 ; f < medidaTablero1.filas; f++){

}
    nuevoArray.push("")

let contadorFilaYColumna = ""

/* for (let f = 0 ; f < medidaTablero1.filas; f++){
    contadorFilaYColumna += `<tr id="tr${f}">`
    for(let c = 0 ; c < medidaTablero1.columnas; c++){
        contadorFilaYColumna += `<td id="td${c}"></td> ` 
    }
    contadorFilaYColumna+= `</tr>`
} 

let tableroHTML = document.getElementById("tablero")
tableroHTML.innerHTML = contadorFilaYColumna

let td0 = document.getElementById(td0)
td0.onclick = 



class TableroLogico{
    constructor(){
        
    }
} 




for (let i=0 ; i< tablero.length; i++){
    let fila = [0]
    for (let j=0 ; j<tablero[i].length; j++){
        if(tablero[i][j] === 1){
            aumentarValorIndiceFinal(fila)
        } else if (tablero[i][j-1] != null && tablero[i][j+1] === 1){
            fila.push(0)
        } else if (j === tablero.length){
            fila.pop(0)
        }
    }
    console.log(i, fila)
}*/