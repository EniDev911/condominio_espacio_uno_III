---
layout: default
title: "Normas Quincho"
subtitle: "El Quincho es un espacio común y se aplican todas las normas internas de convivencia y reglamentos del condominio"
banner: true
bannerimg: /assets/quincho_b.jp
---

<style>
.card-img-top {
	transition: transform .5s ease;
}

@media (hover: hover){
    .card-img-top:hover {
        transform: scale(1.1);
    }
}
.list-group-item:hover {
	filter: sepia(60%);
}
</style>

{% include horarios_quincho.html %}

---

<h3 align="center" class="bg-warning bg-gradient py-1 text-uppercase">Normas de uso</h3>

<ul class="list-group list-group-flush py-3">
	{% for item in site.data.normas[0].lista %}
		<li class="list-group-item list-group-item-warning mb-1 shadow">&#x1F4CD; {{ item | upcase }}</li>
	{% endfor %}
</ul>


{% include galeria_quincho.html %}
