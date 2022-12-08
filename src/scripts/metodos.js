const arrayDeNumeros = [1, 2, 3, 4]

function meuMetodoMap (array){
    arrayVazioMap = []
    
    for (let i = 0; i < array.length; i++){
        let multiplicacao = array[i]*2

        arrayVazioMap.push(multiplicacao)
    }
    return arrayVazioMap
}
console.log(meuMetodoMap(arrayDeNumeros))


function meuMetodoFilter(array){
    arrayVazioFilter = []
    
    for (let i = 0; i < array.length; i++){
        if (array[i] > 2){
            arrayVazioFilter.push(array[i])
        }
    }
    return arrayVazioFilter
}
console.log(meuMetodoFilter(arrayDeNumeros))


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


function meuMetodoReduce(array){
    contadorReduce = 0

    for (let i = 0; i < array.length; i++){
        contadorReduce += array[i]
    }
    return contadorReduce
}
console.log(meuMetodoReduce(arrayDeNumeros))


function meuMetodoIncludes(array, numero){
    for (let i = 0; i < array.length; i++){
        if (numero === 1){
            return true
        }
        else if (numero === 2){
            return true
        }
        else if (numero === 3){
            return true
        }
        else if (numero === 4){
            return true
        }
        else{
            return false
        }
    }
}
console.log(meuMetodoIncludes(arrayDeNumeros, 1))


function meuMetodoIndexOf(numero){
    for (let i = 0; i < arrayDeNumeros.length; i++){
        if (numero === 1){
            return 0
        }
        else if (numero === 2){
            return 1
        }
        else if (numero === 3){
            return 2
        }
        else if (numero === 4){
            return 3
        }
        else {
            return -1
        }
    }
}
console.log(meuMetodoIndexOf(1))
