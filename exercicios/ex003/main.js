function gen_multiples(){
    var number_input = document.querySelector('input#number_input').value
    var txt_out = document.querySelector('.multiple_output p.txt_init')
    var box_out = document.querySelector('.multiple_output')
    var multiplication_factor = [0,1,2,3,4,5,6,7,8,9,10]

    if (number_input == ''){
        alert("Por favor, insira um número!")
    }else{
        txt_out.innerHTML = `Multiplos de ${number_input}:`

        multiplication_factor.map(function(factor){
            box_out.innerHTML += `<p>${number_input}x${factor} = ${number_input*factor}</p>`
        })
    }
}