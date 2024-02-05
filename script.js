var nome
var peso
var altura
var total 

var resultado = document.querySelector("#resultado")

function imc() {
    nome = document.getElementById("nome").value
    peso = document.getElementById("peso").value
    altura = document.getElementById("altura").value 

    total = parseInt(peso/(altura * altura))

    if(total < 18.5){
        document.body.style.background = '#F2E85E'
        resultado.innerHTML = ("<h2>" + nome + " seu IMC é de " + total + ". Você está abaixo do peso ideal.")
    }
    else if(total >= 18.5 && total <= 24.9){
        document.body.style.background = '#2D733E'
        resultado.innerHTML = ("<h2>" + nome + " seu IMC é de " + total + ". Você está no peso ideal.")
    }
    else{
        document.body.style.background = '#BF2E21'
        resultado.innerHTML = ("<h2>" + nome + " seu IMC é de " + total + ". Você está acima do peso ideal.")
    }


}