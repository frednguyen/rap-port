
var c1 = $("#canvasone");
var emotionalTone = ['Anger', 'Disgust', 'Fear', 'Joy', 'Sadness'];
var languageTone = ['Analytical', 'Confident', 'Tentative'];
var socialTone = ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Emotional Range'];
var emotionalPercent = [0,0,0,0,0];
var aggregateEmotionalPercent = ['0.187858', '0.033392', '0.077501', '0.56593', '0.222565'];
var languagePercent = ['0.5', '0.45', '0.05'];
var aggregateLanguagePercent = ['0.5', '0.45', '0.05'];
var socialPercent = ['0.144215', '0.288072', '0.569773', '0.640682', '0.450624'];
var aggregateSocialPercent = ['0.144215', '0.288072', '0.569773', '0.640682', '0.450624'];

var emotionalData = {
  labels: emotionalTone,
  datasets: [{
    data: emotionalPercent,
    backgroundColor: [
      'rgba(255, 99, 132, .75)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'],
    borderColor: 'rgba(200, 200, 200, 0.75)',
    hoverBackgroundColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'],
    hoverBorderColor: 'rgba(200, 200, 200, 1)'
  }]
}
var emotionsChart;
$(document).ready(function () {
// removed legend and added a max scale of 1 to keep consistency among charts
emotionsChart = new Chart(c1, {
  type: 'horizontalBar',
  responsive: true,
  maintainAspectRatio: false,
  data: emotionalData,
  options: {
    animation: {
      duration: 5000
    },
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        ticks: {
          // autoSkip: false,
          beginAtZero: true,
          max: 1,
          stepSize: 0.1
        }
      }]
    }
  }
});
})

var updateArray1 = ['.78929', '.13412', '.382', '.0123', '.666']
var updateArray2 = ['.58929', '.43412', '.0282', '.1123', '.566']
function updateTest(updateArray) {
  for(i = 0; i < 5; i++) {
    emotionsChart.data.datasets[0].data[i] = updateArray[i];
  }
  emotionsChart.update();
};