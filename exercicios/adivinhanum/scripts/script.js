let num_random = Math.floor(Math.random()* 100)
let teste = document.getElementById('t')
function verificar(){
    let n1 = Number(document.getElementById('txt').value)
    let res = document.getElementById('res')
    if(n1 < num_random){
        res.innerHTML = `O número ${n1} é menor!`
    }else if(n1 > num_random){
        res.innerHTML = `O número ${n1} é menor!`
    }else{
        res.innerHTML = `Parabéns! ${n1} é o número!`
    }
    
}
teste.innerHTML = num_random