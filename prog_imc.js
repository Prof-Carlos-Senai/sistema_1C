let resposta = document.getElementById('resposta')
console.log(resposta)

function calcular() {
    let altura = Number(document.getElementById('altura').value)
    let peso = Number(document.getElementById('peso').value)

    let imc = peso / (altura * altura)
    console.log(imc)

    resposta.innerHTML = ``
    resposta.innerHTML += `O seu índice de massa corporal é: ${imc.toFixed(2)} Kg/m²`

    let classificacao = classificar(imc)

    resposta.innerHTML += '<br>' + classificacao

}

function classificar(imc){
    if(imc < 0){
        return 'valor inválido, digite novamente!'
    }else if(imc > 0 && imc < 18.5){
        return 'sua classificação é: Magreza'
    }else if(imc >= 18.5 && imc < 25.0){
        return 'sua classificação é: Peso Normal'
    }else if(imc >= 25.0 && imc < 30.0){
        return 'sua classificação é: Peso Sobrepeso'
    }else if(imc >= 30.0 && imc < 35.0){
        return 'sua classificação é:  Obesidade grau I'
    }else if(imc >= 35.0 && imc < 40.0){
        return 'sua classificação é:  Obesidade grau II'
    }else if(imc > 40.0){
        return 'sua classificação é:  Obesidade grau III (grave)'
    }
}