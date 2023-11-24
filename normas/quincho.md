---
layout: default
title: "Normas Quincho"
subtitle: "El Quincho es un espacio común y se aplican todas las normas internas de convivencia y reglamentos del condominio"
banner: true
bannerimg: /assets/quincho_b.jpg
---


<h3 align="center" class="display-4 text-uppercase">Normas de uso</h3>

{% include visor_pdf.html
	pdf='/assets/pdfs/uso_quincho.pdf'
%}

<!-- <ul class="list-group list-group-flush py-3">
	{% for item in site.data.normas[0].lista %}
		<li class="list-group-item list-group-item-warning mb-1 shadow">&#x1F4CD; {{ item | upcase }}</li>
	{% endfor %}
</ul> -->

{% include horarios_quincho.html %}


{% include galeria_quincho.html %}

<div class="alert alert-warning text-center my-3">
El quincho debe ser entregado en condiciones optimas, tal como lo muestra las ilustraciones anteriores.</div>