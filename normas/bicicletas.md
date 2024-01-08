---
layout: page
title: Bicicletas
subtitle: "Reglamento de Áreas de Bicicletas en el Condominio"
banner: true
bannerimg: /assets/bicicletas.png
---

{% include banner.html %}


<ul class="font-karla list-group list-group-numbered">
	{% for item in site.data.normas[1].lista %}
		<li class="list-group-item list-group-item-warning mb-2 shadow">{{ item }}</li>
	{% endfor %}
</ul>
