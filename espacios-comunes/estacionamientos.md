---
layout: page
title: Estacionamientos
subtitle: "Estacionamientos del condominio"
img_path: /assets/imgs/planos/
---


<div class="row my-5 gap-3 align-items-top justify-content-center">
	<div class="col-12 col-md-3">
		<div class="d-flex flex-wrap gap-3 mb-5">
			<a href="javascript:void(0)" class="btn btn-info" data-href="{{ page.img_path | relative_url | append: 'plano-estacionamientos.png'}}" data-title="Plano estacionamientos">Estacionamientos</a>
			<a href="javascript:void(0)" class="btn btn-success" data-href="{{ page.img_path | relative_url | append: 'zona-de-seguridad.png'}}" data-title="Plan de emergencia">Zona de Seguridad</a>
			<a href="javascript:void(0)" class="btn btn-warning" data-href="{{ page.img_path | relative_url | append: 'llave-de-paso-gas.png'}}" data-title="Zona de LLaves de Gas" data-width="2600" data-height="2600">LLaves de paso de Gas</a>
		</div>
	</div>
	<div class="col-12 col-md-7 position-relative">
		<h3 class="text-uppercase text-center">Plano estacionamientos</h3>
		<img src="{{ page.img_path | relative_url | append: 'plano-estacionamientos.png'}}" alt="estacionamientos" id="original" class="border border-2 border-secondary p-3 rounded shadow zoom" data-magnify-src="{{ page.img_path | relative_url | append: 'plano-estacionamientos.png'}}">
	</div>
</div>

<script>
window.onload = function() {
  document.addEventListener("contextmenu", function(e){
    e.preventDefault();
  }, false);

 	const img = document.querySelector("#original");
 	const h3 = document.querySelector("h3");

	document.querySelectorAll("a.btn")
	.forEach((item) => {
		item.addEventListener('click', (event) => {
			h3.textContent = event.target.dataset.title;
			switchPic(event.target.dataset.href,event.target.dataset.width, event.target.dataset.height);
		})
	})
} 
</script>