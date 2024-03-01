let numalea = Math.floor(Math.random()* 100)
function calcular(){
let n1 = Number(document.getElementById('nt1').value)
let res = document.getElementById('res')

if(n1 < numalea){
    res.innerHTML = `Errou o numero ${n1} é menor!`
}else if(n1 > numalea){
    res.innerHTML = `Errou! o numero ${n1} é maior!`
}else{
    res.innerHTML = `Acertou! <strong>${n1}</strong> é o número!`
}
}

