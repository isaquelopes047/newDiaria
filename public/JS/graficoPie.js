   import {diariaCompleta, cafe, almoco, janta} from './diariaCompleta.js'
    
    google.charts.load('current', {'packages':['corechart']});

    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['Café', cafe],
        ['Almoço', almoco],
        ['Janta', janta],
    ]);

    var options = {
        title:`Dados de Diarias, base de calculo atual: ${diariaCompleta}`,
        width:450,
        height:200,
        is3D: true,
        legend: 'labeled',
        backgroundColor: 'transparent',
    };

    var chart = new google.visualization.PieChart(document.querySelector('.graficoDiaria'));
    chart.draw(data, options);
}