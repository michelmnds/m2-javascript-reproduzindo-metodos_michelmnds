const arrayDeNumeros = [1, 2, 3, 4]


arrayVazioMap = []

function meuMetodoMap (array, callback){
    for (let i = 0; i < array.length; i++){
        callback(array[i], i, array)
    }
    console.log(arrayVazioMap)
}
function callbackMap(elemento){
    let multiplicacao = elemento*2

    arrayVazioMap.push(multiplicacao)
}
meuMetodoMap (arrayDeNumeros, callbackMap)


arrayVazioFilter = []

function meuMetodoFilter(array, callback){
    for (let i = 0; i < array.length; i++){
        callback(array[i], i, array)
    }
    console.log(arrayVazioFilter)
}
function callbackFilter(elemento){
    
    if (elemento > 2){
        arrayVazioFilter.push(elemento)
    }
}
meuMetodoFilter(arrayDeNumeros, callbackFilter)

objetoVazioFind = {}

function meuMetodoFind(array){
    objetoVazioFind = {}
    
    for (let i = 0; i < array.length; i++){
        if (array[i] > 2){
            objetoVazioFind = array[i]
            return objetoVazioFind
        }
    }  
}
console.log(meuMetodoFind(arrayDeNumeros))


contadorReduce = 0

function meuMetodoReduce(array, callback){
    for (let i = 0; i < array.length; i++){
        acumulador = array[i]
        valorAtual = i
        valorInicial = 0
        
        callback(acumulador, valorAtual, valorInicial)
    }
    console.log(contadorReduce)
}
function callbackReduce(elemento){
    contadorReduce += elemento 
}
meuMetodoReduce(arrayDeNumeros, callbackReduce)


function meuMetodoIncludes(array, numero){
    variavelIncludes = 0;
    
    for (let i = 0; i < array.length; i++){
        if (numero){
            variavelIncludes += numero
            if (variavelIncludes <= array.length){
                return true
            }
            else{
                return false
            }
        }
    }
}
console.log(meuMetodoIncludes(arrayDeNumeros, 1))


function meuMetodoIndexOf(array, numero){
    for (let i = 0; i < array.length; i++){
        if(numero <= array.length){
            return numero - 1
        }
        else{
            return -1
        }
    } 
}
console.log(meuMetodoIndexOf(arrayDeNumeros, 3))
