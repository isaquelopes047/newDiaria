import { diariaCompleta } from './diariaCompleta.js'

let dados = 0;

let button = document.querySelector('.calculaDiaria')
button.addEventListener('click', function (){

    let infoValue = document.querySelector('.valueTotal').value;

    let err = 'Valor invalido';

    dados = infoValue / diariaCompleta * 24

    let apresentaResult = document.querySelector('.apresentaResulHoras')

    if(dados <= 0 || isNaN(dados)){
        apresentaResult.style.color = 'red'
        apresentaResult.textContent = err;
    }
    else{
        apresentaResult.style.color = 'green'
        apresentaResult.innerHTML = dados.toFixed(1);
        criaGraficoBarras();
    }
})