let nale = Math.floor(Math.random()* 100)
function verificar(){
    let n1 = Number(document.getElementById('n1t').value)
    let res  = document.getElementById('res')
    if(n1 == nale){
        res.innerHTML = `Parabéns você acertou! ${n1} é o número!`
    }else if(n1 < nale){
        res.innerHTML = `Errou! O numero ${n1} é menor!`
    }else{
        res.innerHTML = `Errou! O numero ${n1} é maior!`
             }
            }