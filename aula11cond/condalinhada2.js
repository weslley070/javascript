var hor = new Date()
var hora = hor.getHours()
if(hora < 12.00 && hora > 6.00){
    console.log('Bom dia!')
}else if(hora > 12 && hora < 18.00){
    console.log('Boa tarde!')
}else if(hora > 18.00 && hora < 24.00){
    console.log('Boa noite!')
}else{
    console.log('Boa madrugada!')
}console.log('Agora são exatamente '+ hora + ' horas.')