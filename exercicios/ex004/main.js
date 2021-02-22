function count() {
    var start_count = document.querySelector('.count_input input#init_num').value
    var end_count = document.querySelector('.count_input input#end_num').value
    var step_count = document.querySelector('.count_input input#step_num').value
    var out_count = document.querySelector('.count_output')

    if(start_count == "" || end_count == "" || step_count == ""){
        alert('Por favor, insira todos os valores para iniciarmos a contagem.')
    }else if (step_count <= "0"){
        alert('Por favor, insira um valor diferente de zero.')
    }else{
        var s = Number(start_count)
        var e = Number(end_count)
        var stp = Number(step_count)

        if (start_count > end_count) {
            for(i=s; i >= e; i -= stp){
                out_count.innerHTML += `<span>${i}\u{1F449} </span>`
            }
        }else{
            for(i=s; i <= e; i += stp){
                out_count.innerHTML += `<span>${i}\u{1F449} </span>`
            }
        }
        out_count.innerHTML += `&#9872;`
        s,e,stp = 0
    }
}