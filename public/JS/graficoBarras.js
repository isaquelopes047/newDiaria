
google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

export function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Dados', 'Dias', 'Folgas'],
    ['D/ trabalhos', 0, 0],
    ['D/ folgas', 0, 0],
  ]);

  var options = {
    width: 480,
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