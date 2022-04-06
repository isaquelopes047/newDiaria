import { diariaCompleta } from './diariaCompleta.js'

var result = 0;
var resultFinal = 0;

/* Function dias de trabalho */
let button = document.querySelector('.calculaDiaria')
button.addEventListener('click', function () {
    let infoValue = document.querySelector('.valueTotal').value;

    result = infoValue / diariaCompleta;

    let apresentaResult = document.querySelector('.apresentaResult')

    if (result > 0) {
        apresentaResult.style.color = 'green'
        apresentaResult.innerHTML = result.toFixed(1);

        criaGraficoBarras();
    }
    else {
        apresentaResult.style.color = 'red'
        apresentaResult.textContent = 'Resultado invalido!'
    }
})


/* Function dias de trabalho */
let buttonData = document.querySelector('#calc')
buttonData.addEventListener('click', () => {

    var dt1 = document.querySelector('#date1').value;
    var dt2 = document.querySelector('#date2').value;
    var data1 = new Date(dt1);
    var data2 = new Date(dt2);

    let err = 'Sem folgas';

    let dados = (data2 - data1)/(1000*3600*24) + 1;
        resultFinal = dados / 6;

    let apresenta = document.querySelector('#result')

        if(resultFinal < 1 || isNaN(resultFinal)){
            apresenta.style.color = 'red'
            apresenta.textContent = err;
        }
        else{
            apresenta.style.color = 'green'
            apresenta.textContent = resultFinal.toFixed(1);
            criaGraficoBarras();
        }
})


/* Grafico Dash barras */
function criaGraficoBarras() {
    google.charts.load('current', { 'packages': ['bar'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Dados', 'Dias', 'Folgas'],
            ['D/ trabalhos', result, 0],
            ['D/ folgas', 0, resultFinal],
        ]);

        var options = {
            chart: {
              title: 'Dados da viagem',
              subtitle: 'Informaçoes coletadas com base nos dados de entrada',
            },
            bars: 'horizontal', // Required for Material Bar Charts.
            hAxis: {
              title: 'Total de viagem',
              maxValue: 5
            },
          };
        var chart = new google.charts.Bar(document.getElementById('graficoBarras'));
        chart.draw(data, google.charts.Bar.convertOptions(options));
    }
}
