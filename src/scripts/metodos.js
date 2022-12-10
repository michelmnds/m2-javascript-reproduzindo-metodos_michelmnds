const arrayDeNumeros = [1, 2, 3, 4]


//Map
arrayVazioMap = []

function meuMetodoMap (array, callback){
    for (let i = 0; i < array.length; i++){
        const elemento = array[i]

        arrayVazioMap.push(callback(elemento))
    }
    return arrayVazioMap
}
function callbackMap(elemento){
    return elemento*2
}
console.log(meuMetodoMap(arrayDeNumeros, callbackMap))


//Filter
arrayVazioFilter = []

function meuMetodoFilter(array, callback){
    for (let i = 0; i < array.length; i++){
        const elemento = array[i]

        const elementoFiltrado = callback(elemento)

        if(elementoFiltrado === true){
            arrayVazioFilter.push(elemento)
        }
    }
    return arrayVazioFilter
}
function callbackFilter(elemento){
    return elemento > 2
}
console.log(meuMetodoFilter(arrayDeNumeros, callbackFilter))


//Find
objetoVazioFind = {}

function meuMetodoFind(array, callback){
    objetoVazioFind = {}
    
    for (let i = 0; i < array.length; i++){
        const elemento = array[i]

        const elementoEncontrado = callback(elemento)

        if (elementoEncontrado === true){
            objetoVazioFind = elemento
            return objetoVazioFind
        }
    }  
}
function callbackFind (elemento){
    return elemento > 2
}

console.log(meuMetodoFind(arrayDeNumeros, callbackFind))


//Reduce
function meuMetodoReduce(array, callback, valorInicial){
    valorInicial = 0
    
    for (let i = 0; i < array.length; i++){
        elemento = array[i]
        
        valorInicial = callback(valorInicial, elemento)
    }
    return valorInicial
}
function callbackReduce(acumulador, valorAtual){
    return acumulador + valorAtual
}
console.log(meuMetodoReduce(arrayDeNumeros, callbackReduce))


//Includes
function meuMetodoIncludes(array, numero){
    for (let i = 0; i < array.length; i++){
        elemento = array[i]

        if (elemento === numero){
            return true
        }
    }
    return false
}
console.log(meuMetodoIncludes(arrayDeNumeros, 2))


//IndexOf
function meuMetodoIndexOf(array, numero, pontoInicial = 0){
    if (pontoInicial >= array.length){
        return -1
    }
    else if (pontoInicial < 0){
        for (let i = array.length; i < pontoInicial; i++){
            elemento = array[i]

            if (elemento === numero){
                return i
            }
        }
    }
    for (let i = pontoInicial; i < array.length; i++){
        const elemento = array[i]

        if (elemento === numero){
            return i
        }
    }
    return -1
}
console.log(meuMetodoIndexOf(arrayDeNumeros, 1, 0))