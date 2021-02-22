function load(){
    var txthour = document.querySelector('div.content p') 
    var imgHour = document.querySelector('div.img_hour') 
    var bg = document.body

    var now = new Date()
    var hour = now.getHours()



    if (hour >= 0 && hour < 12){
        txthour.innerText = `Agora sao ${hour} horas`
        imgHour.innerHTML = '<img src="./images/morning.jpg">'
        bg.style.backgroundColor = '#fae54b'
    }else if (hour <= 18) {
        txthour.innerText = `Agora sao ${hour} horas`
        imgHour.innerHTML = '<img src="./images/afternoon.jpg">'
        bg.style.backgroundColor = '#ff7300'
    }else{
        txthour.innerText = `Agora sao ${hour} horas`
        imgHour.innerHTML = '<img src="./images/night.jpg">'
        bg.style.backgroundColor = '#1a2026'
    }
}