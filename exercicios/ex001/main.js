function showPerson(){
    const date = new Date()
    var year = date.getFullYear()

    var inputYear = document.querySelector('input#numYear').value
    var txtPerson = document.querySelector('div.person p')
    var gender = document.getElementsByName('gender')

    age = year - inputYear

    if(inputYear > year || inputYear < 1915){
        txtPerson.innerText = "ERRO: Por favor, insira uma data valida!"
    } else{
        if (gender[0].checked) {
            txtPerson.innerText = `Identificamos um homem com ${age} ${age == 1 ? "ano" : "anos" }`
            defImage('male')
        }else if(gender[1].checked){
            txtPerson.innerText = `Identificamos uma mulher com ${age} ${age == 1 ? "ano" : "anos" }`
            defImage('female')
        }else{
            txtPerson.innerText = 'Por favor insira selecione um genero'
        }
    }
}

/*
< 4 bebe
< 11 criança
< 18 adolescente
< 60 adulto
> 60 idoso
*/
function defImage(gender){
    var imgDiv = document.querySelector('div.person div.img_person')

    if (gender == 'male'){
        if (age < 4){
            imgDiv.innerHTML = '<img src="images/men/baby.jpg">'
        }else if (age <= 11){
            imgDiv.innerHTML = '<img src="images/men/kid.jpeg">'
        }else if (age <= 18){
            imgDiv.innerHTML = '<img src="images/men/teenager.jpg">'
        }else if (age <= 60){
            imgDiv.innerHTML = '<img src="images/men/adult.jpeg">'
        }else if (age > 60){
            imgDiv.innerHTML = '<img src="images/men/old_man.jpg">'
        }
        
    }else{
        if (age < 4){
            imgDiv.innerHTML = '<img src="images/women/baby.jpg">'
        }else if (age <= 11){
            imgDiv.innerHTML = '<img src="images/women/kid.jpeg">'
        }else if (age <= 18){
            imgDiv.innerHTML = '<img src="images/women/teenager.jpg">'
        }else if (age <= 60){
            imgDiv.innerHTML = '<img src="images/women/adult.jpg">'
        }else if (age > 60){
            imgDiv.innerHTML = '<img src="images/women/old_man.jpeg">'
        }
    }
}