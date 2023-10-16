---
layout: default
title: "Normas Quincho"
subtitle: "El Quincho es un espacio común y se aplican todas las normas internas de convivencia y reglamentos del condominio"
banner: true
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

</style>

<h3 align="center" class="bg-dark bg-gradient text-light py-1 rounded">Horarios disponibles</h3><br>
<!-- BLOQUE HORARIOS -->
<ul class="nav nav-tabs" id="myTab" role="tablist">
    {% for item in site.data.normas[0].bloques %}
      <li class="nav-item fw-bold" role="presentation">
        <button class="nav-link {% if item.active %}active{% endif %}" id="{{ item.bloque }}" data-bs-toggle="tab" data-bs-target="#{{ item.bloque }}_pane" type="button" role="tab" aria-controls="{{ item.bloque }}" aria-selected="true">{{ item.nombre | upcase }}</button>
       </li>
    {% endfor %}
</ul>
<div class="tab-content mt-3" id="myTabContent">
    {% for item in site.data.normas[0].bloques %}
      <div class="tab-pane fade fs-5 fw-bold {% if item.active %}show active{% endif %}" id="{{ item.bloque }}_pane" role="tabpanel" aria-labelledby="{{ item.bloque }}_pane" tabindex="0">&#x23f2; {{ item.horario | upcase }}</div>
    {% endfor %}
</div>

---

<h3 align="center" class="bg-dark bg-gradient text-light py-1 rounded">Normas de uso</h3>

<ul class="list-group list-group-flush py-3">
	{% for item in site.data.normas[0].lista %}
		<li class="list-group-item list-group-item-warning">&#x1F4CD; {{ item | upcase }}</li>
	{% endfor %}
</ul>



<!-- SECTION: DESTACADOS -->
<section>
    <h2 class="text-center text-uppercase my-3">Conoce nuestro quincho</h2>
    <hr class="text-secondary mb-4">
    <div class="row mt-4">
        <!-- COL: 1 > CARD : 1 -->
        <div class="col-10 col-md-6 col-lg-4 col-xl-4 mb-3 mb-xl-0 mx-auto">
            <div class="card">
                <img src="{{ '/assets/quincho/01.jpg' | relative_url }}" class="card-img-top" alt="img - quincho"
                    data-bs-toggle="tooltip" title="abrir" data-bs-placement="bottom" height="220">
            </div>
        </div>
        <!-- COL: 1 > CARD : 1 -->
        <div class="col-10 col-md-6 col-lg-4 col-xl-4 mb-3 mb-xl-0 mx-auto">
            <div class="card">
                <img src="{{ '/assets/quincho/02.jpg' | relative_url }}" class="card-img-top" alt="img - quincho"
                    data-bs-toggle="tooltip" title="abrir" data-bs-placement="bottom" height="220">
            </div>
        </div>
        <!-- COL: 3 > CARD : 3 -->
        <div class="col-10 col-md-6 col-lg-4 col-xl-4 mb-3 mb-xl-0 mx-auto">
            <div class="card">
                <img src="{{ '/assets/quincho/03.jpg' | relative_url }}" class="card-img-top" alt="img - quincho"
                    data-bs-toggle="tooltip" title="abrir" data-bs-placement="bottom" height="220">
            </div>
        </div>
    </div>
</section>

