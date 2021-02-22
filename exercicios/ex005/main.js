var out_count = document.querySelector('.output .outputLabel')
var Numbers = []

function updateList(){
    out_count.innerHTML = ""

    Numbers.map(num =>{
        out_count.innerHTML += `<p>Valor ${num}, foi adicionado</p>`
    })
}

function AddNumber() {
    var NumberToAdd = document.querySelector('.count_input input#init_num').value
    
    if (NumberToAdd < 0 || NumberToAdd > 100 || NumberToAdd == "") {
        alert("Por favor insira um número entre 0 e 100!")
    }else{
        Numbers.push(NumberToAdd)
        updateList()
    }
}

function Analise(){
    // Quantidade de numeros cadastrados

    //colocando os valores em ordem crescente

    // maior valor

    // menor valor

    // soma

    // média
}