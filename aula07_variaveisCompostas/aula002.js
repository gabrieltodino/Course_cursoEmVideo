var num = [5,8,2,4,5]//definindo array

//percorrendo array com for
for(let pos = 0; pos < num.length; pos++){
    console.log(`for - O indice ${pos}, é ${num[pos]}`)
}

//percorrendo array com for in
for(let pos in num){
    console.log(`for in - O indice ${pos}, é ${num[pos]}`)
}

//percorrendo array com o map
num.map((numb) => {
    console.log(`map - O valor é ${numb}`)
})