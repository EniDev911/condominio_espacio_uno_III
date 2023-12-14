---
layout: default
title: "Normas Quincho"
subtitle: "El Quincho es un espacio común y se aplican todas las normas internas de convivencia y reglamentos del condominio"
banner: true
bannerimg: /assets/quincho_b.jpg
---

<div class="content">

{% include banner.html %}

<hr>

{% include visor_pdf.html
	pdf='/assets/pdfs/uso_quincho.pdf'
%}


{% include horarios_quincho.html %}


<!-- https://calendar.google.com/calendar/u/0/embed?src=b4dhbtnlnvu8ifjce61ie8cpt4@group.calendar.google.com&ctz=America/Chicago -->

<style type="text/css">
	#calendar {
		border: 1px solid #ccc7 !important;
		height: 600px !important;
	}
	@media (max-width: 600px) {
		#calendar {
			height: auto !important;
			border: 1px solid #f00 !important;
	 	}
	}
</style>
<iframe src="https://embed.styledcalendar.com/#716zRSVoNNOHuh9Z5UgY" title="Styled Calendar" class="styled-calendar-container shadow-sm rounded" style="width: 100%; border: none;" data-cy="calendar-embed-iframe" id="calendar"></iframe>
<script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>

{% include galeria_quincho.html %}

<div class="alert alert-warning text-center my-3">
El quincho debe ser entregado en condiciones optimas, tal como lo muestra las ilustraciones anteriores.</div>

</div>