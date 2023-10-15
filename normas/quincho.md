---
layout: default
title: "Normas Quincho"
banner: true
---

<style>
.card-img-top {
	transition: transform .5s ease;
}

.card-img-top:hover {
	transform: scale(1.2);
}

</style>


<ul class="list-group list-group-flush py-3">
	{% for item in site.data.normas[0].lista %}
		<li class="list-group-item list-group-item-warning">&#x1F4CD; {{ item | upcase }}</li>
	{% endfor %}
</ul>

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">BLOQUE 1</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">BLOQUE 2</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">BLOQUE 3</button>
  </li>
</ul>
<div class="tab-content mt-3" id="myTabContent">
  <div class="tab-pane fade show active fs-5 fw-bold" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">&#x23f2; 9:00 A 12:00 HORAS</div>
  <div class="tab-pane fade fs-5 fw-bold" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">&#x23f2; 13:00 A 16:00 HORAS</div>
  <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">...</div>
  <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">...</div>
</div>

<!-- SECTION: DESTACADOS -->
<section class="pt-2 container">
    <h2 class="text-center text-uppercase my-3">Conoce nuestro quincho</h2>
    <hr class="text-secondary mb-4">
    <div class="row mt-4">
        <!-- COL: 1 > CARD : 1 -->
        <div class="col-10 col-md-6 col-lg-4 col-xl-3 mb-3 mb-xl-0 mx-auto">
            <div class="card">
                <img src="{{ '/assets/quincho/01.jpg' | relative_url }}" class="card-img-top" alt="card imagen 1"
                    data-bs-toggle="tooltip" title="quincho parrilla" data-bs-placement="bottom" height="190">
            </div>
        </div>
        <!-- COL: 1 > CARD : 1 -->
        <div class="col-10 col-md-6 col-lg-4 col-xl-3 mb-3 mb-xl-0 mx-auto">
            <div class="card">
                <img src="{{ '/assets/quincho/02.jpg' | relative_url }}" class="card-img-top" alt="card imagen 2"
                    data-bs-toggle="tooltip" title="quincho parrilla" data-bs-placement="bottom" height="190">
            </div>
        </div>
        <!-- COL: 3 > CARD : 3 -->
        <div class="col-10 col-md-6 col-lg-4 col-xl-3 mb-3 mb-xl-0 mx-auto">
            <div class="card">
                <img src="{{ '/assets/quincho/03.jpg' | relative_url }}" class="card-img-top" alt="card imagen 2"
                    data-bs-toggle="tooltip" title="quincho parrilla" data-bs-placement="bottom" height="190">
            </div>
        </div>
    </div>
</section>

