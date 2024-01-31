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

<div class="alert alert-danger shadow mt-2"><i class="fas fa-exclamation-triangle"></i> El incumplimiento de cualquier item del reglamento podrá acarrear sanciones, incluyendo la retirada de bicicletas.</div>


<div class="col-12 col-md-6 mx-auto mt-4">
	<img src="{{ '/assets/responsabilidad_bicicletas.png' | relative_url }}" class="img-fluid">
</div>