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

	var emotionaldata = {
		labels: EmotionalTone,
		datasets: [
			{
				label: 'Tone',
				backgroundColor: 'rgba(255, 0, 0, 0.75)',
				borderColor: 'rgba(200, 200, 200, 0.75)',
				hoverBackgroundColor: 'rgba(255, 0, 0, 1)',
				hoverBorderColor: 'rgba(200, 200, 200, 1)',
				data: EmotionalPercent
			}
		]
	};

	var languagedata = {
		labels: LanguageTone,
		datasets: [
			{
				label: 'Tone',
				backgroundColor: 'rgba(200, 200, 200, 0.75)',
				borderColor: 'rgba(200, 200, 200, 0.75)',
				hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
				hoverBorderColor: 'rgba(200, 200, 200, 1)',
				data: LanguagePercent
			}
		]
	};

	var socialdata = {
		labels: SocialTone,
		datasets: [
			{
				label: 'Tone',
				backgroundColor: 'rgba(200, 200, 200, 0.75)',
				borderColor: 'rgba(200, 200, 200, 0.75)',
				hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
				hoverBorderColor: 'rgba(200, 200, 200, 1)',
				data: SocialPercent
			}
		]
	};

	var aggregateemotionaldata = {
		labels: EmotionalTone,
		datasets: [
			{
				label: 'Tone',
				backgroundColor: 'rgba(255, 0, 0, 0.75)',
				borderColor: 'rgba(200, 200, 200, 0.75)',
				hoverBackgroundColor: 'rgba(255, 0, 0, 1)',
				hoverBorderColor: 'rgba(200, 200, 200, 1)',
				data: AggregateEmotionalPercent
			}
		]
	};

	var aggregatelanguagedata = {
		labels: LanguageTone,
		datasets: [
			{
				label: 'Tone',
				backgroundColor: 'rgba(200, 200, 200, 0.75)',
				borderColor: 'rgba(200, 200, 200, 0.75)',
				hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
				hoverBorderColor: 'rgba(200, 200, 200, 1)',
				data: AggregateLanguagePercent
			}
		]
	};

	var aggregatesocialdata = {
		labels: SocialTone,
		datasets: [
			{
				label: 'Tone',
				backgroundColor: 'rgba(200, 200, 200, 0.75)',
				borderColor: 'rgba(200, 200, 200, 0.75)',
				hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
				hoverBorderColor: 'rgba(200, 200, 200, 1)',
				data: AggregateSocialPercent
			}
		]
	};

	var c1 = $("#canvasone");

	var barGraph = new Chart(c1, {
		type: 'horizontalBar',
		responsive: true,
		maintainAspectRatio: false,
		data: emotionaldata
	})

	var c2 = $("#canvastwo");

	var barGraph = new Chart(c2, {
		type: 'horizontalBar',
		responsive: true,
		maintainAspectRatio: false,
		data: languagedata
	})

	var c3 = $("#canvasthree");

	var barGraph = new Chart(c3, {
		type: 'horizontalBar',
		responsive: true,
		maintainAspectRatio: false,
		data: socialdata
	})

	var c4 = $("#canvasfour");

	var barGraph = new Chart(c4, {
		type: 'horizontalBar',
		responsive: true,
		maintainAspectRatio: false,
		data: aggregateemotionaldata
	})

	var c5 = $("#canvasfive");

	var barGraph = new Chart(c5, {
		type: 'horizontalBar',
		responsive: true,
		maintainAspectRatio: false,
		data: aggregatelanguagedata
	})

	var c6 = $("#canvassix");

	var barGraph = new Chart(c6, {
		type: 'horizontalBar',
		responsive: true,
		maintainAspectRatio: false,
		data: aggregatesocialdata
	});
});