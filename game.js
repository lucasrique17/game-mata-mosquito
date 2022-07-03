// Encontrando altura e largura da página web

var altura = 0
var largura = 0
var vidas = 1
var tempo = 10
var nivel = window.location.search
var criaMosquitoTempo = 2000

nivel = nivel.replace('?', '')

if (nivel === 'normal') {

    criaMosquitoTempo = 2000

} else if (nivel === 'dificil') {

    criaMosquitoTempo = 1300

} else if (nivel === 'lendario') {

    criaMosquitoTempo = 750

}

function ajustaTamanhoPalcoJogo(){

    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)


}

ajustaTamanhoPalcoJogo()

//Decrementando o cronometro

var cronometro = setInterval(function () {

    tempo -= 1
    
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    } else{
    
    document.getElementById('cronometro').innerHTML = tempo

    }

}, 1000)

// Criando posição randômica

function posicaoRandomica () {

// Removendo o mosquito anterior caso exista

    if(document.getElementById('mosquito')){

        document.getElementById('mosquito').remove()

// Removendo vidas

        if (vidas > 3){
            
            window.location.href = 'fim_do_jogo.html'

        }else{
        
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

            vidas++
        }
    }
    

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

// Criando elemento HTML

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/aedes.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        
        this.remove()

    }

    document.body.appendChild(mosquito)

    ladoAleatorio()

//Gerando tamanhos aleatórios

function tamanhoAleatorio() {

    var classe = Math.floor(Math.random() * 3)

    console.log(classe)

    switch (classe) {

        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }

}

// Gerando posição aleatória direita,esquerda

function ladoAleatorio () {

    var classe = Math.floor(Math.random() * 2)

    console.log(classe)

    switch (classe) {

        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }

}

}
