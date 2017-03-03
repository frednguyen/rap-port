$(document).ready(function () {
	var EmotionalTone = ['Anger', 'Disgust', 'Fear', 'Joy', 'Sadness'];
	var LanguageTone = ['Analytical', 'Confident', 'Tentative'];
	var SocialTone = ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Emotional Range'];
	var EmotionalPercent = ['0.187858', '0.033392', '0.077501', '0.56593', '0.222565'];
	var AggregateEmotionalPercent = ['0.187858', '0.033392', '0.077501', '0.56593', '0.222565'];
	var LanguagePercent = ['0.5', '0.45', '0.05'];
	var AggregateLanguagePercent = ['0.5', '0.45', '0.05'];
	var SocialPercent = ['0.144215', '0.288072', '0.569773', '0.640682', '0.450624'];
	var AggregateSocialPercent = ['0.144215', '0.288072', '0.569773', '0.640682', '0.450624'];

// Added colors to individual bars
	var emotionaldata = {
		labels: EmotionalTone,
		datasets: [
			{
				backgroundColor: [
					'rgba(255, 99, 132, .75)',
					'rgba(150, 126, 37, 0.2)',
					'rgba(224, 177, 8, 0.2)',
					'rgba(198, 47, 47, 0.2)',
					'rgba(209, 87, 27, 0.2)',
					'rgba(255, 159, 104, 0.2)'
				],
				borderColor: 'rgba(200, 200, 200, 0.75)',
				hoverBackgroundColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(150, 126, 37, 1)',
					'rgba(224, 177, 8, 1)',
					'rgba(198, 47, 47, 1)',
					'rgba(209, 87, 27, 1)',
					'rgba(255, 159, 104, 1)'
				],
				hoverBorderColor: 'rgba(200, 200, 200, 1)',
				data: EmotionalPercent,
			}
		]
	};

	var languagedata = {
		labels: LanguageTone,
		datasets: [
			{
				backgroundColor: [
					'rgba(17, 52, 178, .75)',
					'rgba(41, 47, 68, 0.2)',
					'rgba(145, 149, 67, 0.2)',
					'rgba(91, 46, 150, 0.2)',
					'rgba(131, 12, 142, 0.2)',
					'rgba(21, 165, 237, 0.2)'
				],
				borderColor: 'rgba(200, 200, 200, 0.75)',
				hoverBackgroundColor: [
					'rgba(17, 52, 178, 1)',
					'rgba(41, 47, 68, 1)',
					'rgba(145, 149, 67, 1)',
					'rgba(91, 46, 150, 1)',
					'rgba(131, 12, 142, 1)',
					'rgba(21, 165, 237, 1)'
				],
				hoverBorderColor: 'rgba(200, 200, 200, 1)',
				data: LanguagePercent,
			}
		]
	};

	var socialdata = {
		labels: SocialTone,
		datasets: [
			{
				backgroundColor: [
					'rgba(4, 255, 0, .75)',
					'rgba(15, 104, 13, 0.2)',
					'rgba(110, 209, 108, 0.2)',
					'rgba(36, 242, 111, 0.2)',
					'rgba(41, 99, 62, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: 'rgba(200, 200, 200, 0.75)',
				hoverBackgroundColor: [
					'rgba(4, 255, 0, 1)',
					'rgba(15, 104, 13, 1)',
					'rgba(110, 209, 108, 1)',
					'rgba(36, 242, 111, 1)',
					'rgba(41, 99, 62, 1)',
					'rgba(255, 159, 64, 1)'
				],
				hoverBorderColor: 'rgba(200, 200, 200, 1)',
				data: SocialPercent,
			}
		]
	};

	var aggregateemotionaldata = {
		labels: EmotionalTone,
		datasets: [
			{
				backgroundColor: [
					'rgba(255, 99, 132, .75)',
					'rgba(150, 126, 37, 0.2)',
					'rgba(224, 177, 8, 0.2)',
					'rgba(198, 47, 47, 0.2)',
					'rgba(209, 87, 27, 0.2)',
					'rgba(255, 159, 104, 0.2)'
				],
				borderColor: 'rgba(200, 200, 200, 0.75)',
				hoverBackgroundColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(150, 126, 37, 1)',
					'rgba(224, 177, 8, 1)',
					'rgba(198, 47, 47, 1)',
					'rgba(209, 87, 27, 1)',
					'rgba(255, 159, 104, 1)'
				],
				hoverBorderColor: 'rgba(200, 200, 200, 1)',
				data: AggregateEmotionalPercent,
			}
		]
	};

	var aggregatelanguagedata = {
		labels: LanguageTone,
		datasets: [
			{
				backgroundColor: [
					'rgba(17, 52, 178, .75)',
					'rgba(41, 47, 68, 0.2)',
					'rgba(145, 149, 67, 0.2)',
					'rgba(91, 46, 150, 0.2)',
					'rgba(131, 12, 142, 0.2)',
					'rgba(21, 165, 237, 0.2)'
				],
				borderColor: 'rgba(200, 200, 200, 0.75)',
				hoverBackgroundColor: [
					'rgba(17, 52, 178, 1)',
					'rgba(41, 47, 68, 1)',
					'rgba(145, 149, 67, 1)',
					'rgba(91, 46, 150, 1)',
					'rgba(131, 12, 142, 1)',
					'rgba(21, 165, 237, 1)'
				],
				hoverBorderColor: 'rgba(200, 200, 200, 1)',
				data: AggregateLanguagePercent,
			}
		]
	};

	var aggregatesocialdata = {
		labels: SocialTone,
		datasets: [
			{
				backgroundColor: [
					'rgba(4, 255, 0, .75)',
					'rgba(15, 104, 13, 0.2)',
					'rgba(110, 209, 108, 0.2)',
					'rgba(36, 242, 111, 0.2)',
					'rgba(41, 99, 62, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: 'rgba(200, 200, 200, 0.75)',
				hoverBackgroundColor: [
					'rgba(4, 255, 0, 1)',
					'rgba(15, 104, 13, 1)',
					'rgba(110, 209, 108, 1)',
					'rgba(36, 242, 111, 1)',
					'rgba(41, 99, 62, 1)',
					'rgba(255, 159, 64, 1)'
				],
				hoverBorderColor: 'rgba(200, 200, 200, 1)',
				data: AggregateSocialPercent,
			}
		]
	};

	var c1 = $("#canvasone");

// removed legend and added a max scale of 1 to keep consistency among charts
	var barGraph = new Chart(c1, {
		type: 'horizontalBar',
		responsive: true,
		maintainAspectRatio: false,
		data: emotionaldata,
		options: {
			legend: {
				display: false
			},
			scales: {
				xAxes: [{
					ticks: {
						beginAtZero: true,
						max: 1
					}
				}]
			}
		}
	})

	var c2 = $("#canvastwo");

	var barGraph = new Chart(c2, {
		type: 'horizontalBar',
		responsive: true,
		maintainAspectRatio: false,
		data: languagedata,
		options: {
			legend: {
				display: false
			},
			scales: {
				xAxes: [{
					ticks: {
						beginAtZero: true,
						max: 1
					}
				}]
			}
		}
	})

	var c3 = $("#canvasthree");

	var barGraph = new Chart(c3, {
		type: 'horizontalBar',
		responsive: true,
		maintainAspectRatio: false,
		data: socialdata,
		options: {
			legend: {
				display: false
			},
			scales: {
				xAxes: [{
					ticks: {
						beginAtZero: true,
						max: 1
					}
				}]
			}
		}
	})

	var c4 = $("#canvasfour");

	var barGraph = new Chart(c4, {
		type: 'horizontalBar',
		responsive: true,
		maintainAspectRatio: false,
		data: aggregateemotionaldata,
		options: {
			legend: {
				display: false
			},
			scales: {
				xAxes: [{
					ticks: {
						beginAtZero: true,
						max: 1
					}
				}]
			}
		}
	})

	var c5 = $("#canvasfive");

	var barGraph = new Chart(c5, {
		type: 'horizontalBar',
		responsive: true,
		maintainAspectRatio: false,
		data: aggregatelanguagedata,
		options: {
			legend: {
				display: false
			},
			scales: {
				xAxes: [{
					ticks: {
						beginAtZero: true,
						max: 1
					}
				}]
			}
		}
	})

	var c6 = $("#canvassix");

	var barGraph = new Chart(c6, {
		type: 'horizontalBar',
		responsive: true,
		maintainAspectRatio: false,
		data: aggregatesocialdata,
		options: {
			legend: {
				display: false
			},
			scales: {
				xAxes: [{
					ticks: {
						beginAtZero: true,
						max: 1
					}
				}]
			}
		}
	});
});