$(document).ready(function(){
	var EmotionalTone = ['Anger', 'Disgust', 'Fear', 'Joy', 'Sadness'];
	var EmotionalPercent = ['0.187858', '0.033392', '0.077501', '0.56593', '0.222565'];
	var LanguageTone = ['Analytical', 'Confident', 'Tentative'];
	var LanguagePercent = ['0', '0', '0'];
	var SocialTone = ['Openness_big5', 'Conscientiousness_big5', 'Extraversion_big5', 'Agreeableness_big5', 'Emotional_range_big5'];
	var SocialPercent = ['0.144215', '0.288072', '0.569773', '0.640682', '0.450624'];

	var emotionaldata = {
		labels: EmotionalTone,
		datasets : [
		{
			label: 'Tone percentage',
			backgroundColor: 'rgba(200, 200, 200, 0.75)',
			borderColor: 'rgba(200, 200, 200, 0.75)',
			hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
			hoverBorderColor: 'rgba(200, 200, 200, 1)',
			data: EmotionalPercent
		}
		]
	};

		var ctx = $("#mycanvas");

		var barGraph = new Chart(ctx, {
			type: 'horizontalBar',
			data: emotionaldata
		});
});