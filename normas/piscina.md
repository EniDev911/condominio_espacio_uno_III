---
layout: page
title: "Normas Piscina"
subtitle: "La Piscina es un espacio común y se aplican todas las normas internas de convivencia y reglamentos del condominio"
banner: true
bannerimg: /assets/piscina.jpg
---

{% include banner.html %}

<hr class="my-5">

{% include visor_pdf.html
	pdf='/assets/pdfs/reglamento_piscina.pdf'
%}

<ul class="list-group list-group-flush py-3">
	{% for item in site.data.normas[3].lista %}
		<li class="list-group-item list-group-item-warning mb-1 shadow">&#x1F4CD; {{ item | upcase }}</li>
	{% endfor %}
</ul>


{% include galeria_piscina.html %}
