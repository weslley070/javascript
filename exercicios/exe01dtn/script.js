function carregar(){
    let corpo = document.getElementsByTagName('body')[0]
    let msg = document.getElementById('msg')
    let img = document.getElementById('foto')
    let data = new Date()
    horas = data.getHours()
    msg.innerHTML = `Agora são ${horas} horas`
    
    if(horas < 12 && horas > 0){
        img.src = '1.jpg'
        corpo.style.backgroundColor = 'rgb(241, 227, 137)'
    }else if(horas < 18 && horas > 12){
        img.src = '2.jpg'
        corpo.style.backgroundColor = 'rgb(231, 173, 37)'
    }else{
        img.src = '3.jpg'
        corpo.style.backgroundColor = 'rgb(78, 76, 73)'
    }
}