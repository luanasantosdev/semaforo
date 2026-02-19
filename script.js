let amarelo = document.querySelector('.amarelo')
let verde = document.querySelector('.verde')
let vermelho = document.querySelector('.vermelho')
let texto = document.querySelector('.texto')
let body = document.querySelector('body')
let titulo = document.querySelector('.titulo')
let container = document.querySelector('.container')


amarelo.addEventListener('click',()=>{
    body.classList.remove('siga','pare')
    titulo.classList.add('titulo-black')
    body.classList.add('atencao')
    texto.classList.add('textos')
    container.classList.add('fundo-semaforo')
    texto.innerHTML = '"ATENÇÃO: O sinal mudou! Prepare-se para parar e evite acidentes."'
})

verde.addEventListener('click',()=>{
    body.classList.remove('pare','atencao')
    titulo.classList.add('titulo-black')
    body.classList.add('siga')
    texto.classList.add('textos')
    container.classList.add('fundo-semaforo')
    texto.innerHTML = "SIGA: O caminho está livre. Pode continuar sua viagem com atenção!"
})

vermelho.addEventListener('click',()=>{

    body.classList.remove('siga', 'atencao')
     body.classList.add('pare')
    texto.classList.add('textos')
    container.classList.add('fundo-semaforo')
    texto.innerHTML = "PARE: O sinal está fechado. Aguarde a sua vez com segurança."
})