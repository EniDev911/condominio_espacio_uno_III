---
layout: default
title: "Normas Piscina"
subtitle: "La Piscina es un espacio común y se aplican todas las normas internas de convivencia y reglamentos del condominio"
banner: true
bannerimg: /assets/piscina.jpg
---

<h3 align="center" class="bg-warning bg-gradient py-1 text-uppercase shadow">Normas de uso</h3>

<ul class="list-group list-group-flush py-3">
	{% for item in site.data.normas[3].lista %}
		<li class="list-group-item list-group-item-warning mb-1 shadow">&#x1F4CD; {{ item | upcase }}</li>
	{% endfor %}
</ul>


{% include galeria_piscina.html %}
