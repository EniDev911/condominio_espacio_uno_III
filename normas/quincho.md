---
layout: default
title: "Normas Quincho"
---

<style>
.card-img-top {
	transition: transform .5s ease;
}

.card-img-top:hover {
	transform: scale(1.6);
}

</style>


<ul class="list-group list-group-numbered list-group-flush py-3">
	{% for item in site.data.normas[0].lista %}
		<li class="list-group-item">{{ item }}</li>
	{% endfor %}
</ul>

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

