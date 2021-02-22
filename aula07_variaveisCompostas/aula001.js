//variaveis compostas armazenam varios valores em uma mesma estrutura

var num = [5,8,2]

console.log(`Array inicial: ${num}`)

num[3] = 6// adicionando a um indice especifico

console.log(`Array pós-acréscimo: ${num}`)

num.push(7)//adicionando valores no ultimo indice

console.log(`Array pós-acréscimo-push: ${num}`)

console.log(`Tamanho array: ${num.length}`) 

console.log(`Reordenando array por ordem crescente: ${num.sort()}`)

console.log(`Buscando valores no array: Indice ${num.indexOf(5)}`)//caso nao encontrar retorna -1