
var emotionsCanvas = $('#emotions');
var languageCanvas = $('#language')
var socialCanvas = $('#social')

var emotionsChart;
var languageChart;
var socialChart;

var emotionsLabels = ['Anger', 'Disgust', 'Fear', 'Joy', 'Sadness'];
var languageLabels = ['Analytical', 'Confident', 'Tentative'];
var socialLabels = ['Open', 'Conscience', 'Extraversion', 'Agreeableness', 'Emotion Range'];

var emotionsScores = [0,0,0,0,0];
var languageScores = [0,0,0,0,0];
var socialScores = [0,0,0,0,0];

var emotionsDataColors = [
  'rgba(232, 5, 33, .7)',
  'rgba(89, 38, 132, .7)',
  'rgba(50, 94, 43, .7)',
  'rgba(255, 214, 41, .7)',
  'rgba(8, 109, 178, .7)'];
var emotionsHoverBackgroundColors = [
  'rgba(232, 5, 33, 1)',
  'rgba(89, 38, 132, 1)',
  'rgba(50, 94, 43, 1)',
  'rgba(255, 214, 41, 1)',
  'rgba(8, 109, 178, 1)'];
var languageDataColors = [
  'rgba(255, 99, 132, .7)',
  'rgba(54, 162, 235, 0.7)',
  'rgba(255, 206, 86, 0.7)'];
var languageHoverBackgroundColors = [
  'rgba(255, 99, 132, 1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)'];
  var socialDataColors = [
  'rgba(232, 5, 33, .7)',
  'rgba(89, 38, 132, .7)',
  'rgba(50, 94, 43, .7)',
  'rgba(255, 214, 41, .7)',
  'rgba(8, 109, 178, .7)'];
var socialHoverBackgroundColors = [
  'rgba(232, 5, 33, 1)',
  'rgba(89, 38, 132, 1)',
  'rgba(50, 94, 43, 1)',
  'rgba(255, 214, 41, 1)',
  'rgba(8, 109, 178, 1)'];


var options = {
  animation: {
    duration: 5000
  },
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      ticks: {
        beginAtZero: true,
        max: 1,
        stepSize: 0.1
      }
    }]
  }
}

var emotionsData = {
  labels: emotionsLabels,
  datasets: [{
    data: emotionsScores,
    backgroundColor: emotionsDataColors,
    hoverBackgroundColor: emotionsHoverBackgroundColors
  }]
};

var languageData = {
  labels: languageLabels,
  datasets: [{
    data: languageScores,
    backgroundColor: languageDataColors,
    hoverBackgroundColor: languageHoverBackgroundColors
  }]
};

var socialData = {
  labels: socialLabels,
  datasets: [{
    data: socialScores,
    backgroundColor: socialDataColors,
    hoverBackgroundColor: socialHoverBackgroundColors
  }]
};


$(document).ready(function () {
  emotionsChart = new Chart(emotionsCanvas, {
    type: 'horizontalBar',
    responsive: true,
    maintainAspectRatio: true,
    data: emotionsData,
    options: options
  });

  languageChart = new Chart(languageCanvas, {
    type: 'horizontalBar',
    responsive: true,
    maintainAspectRatio: true,
    data: languageData,
    options: options
  });

  socialChart = new Chart(socialCanvas, {
    type: 'horizontalBar',
    responsive: true,
    maintainAspectRatio: true,
    data: socialData,
    options: options
  });
})

function updateCharts(emotion_scores, language_scores, social_scores) {
  for(i = 0; i < emotion_scores.length; i++) {
    emotionsChart.data.datasets[0].data[i] = emotion_scores[i];
    socialChart.data.datasets[0].data[i] = social_scores[i];
  }
  for(j = 0; j < language_scores.length; j++) {
    languageChart.data.datasets[0].data[i] = language_scores[j];
  }
  emotionsChart.update();
  languageChart.update();
  socialChart.update();
};