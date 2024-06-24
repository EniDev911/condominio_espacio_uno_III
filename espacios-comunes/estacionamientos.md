---
layout: page
title: Estacionamientos
subtitle: "Estacionamientos del condominio"
img_path: /assets/imgs/espacios-comunes/
---


<div class="row my-5 gap-3 align-items-center justify-content-center">
	<div class="col-12 col-md-6 mx-auto position-relative" oncontextmenu="{inhabilitar}">
		<h3 class="text-uppercase text-center">Plano estacionamientos</h3>
		<img src="{{ page.img_path | relative_url | append: 'plano-estacionamientos.png'}}" alt="estacionamientos" id="original" class="border border-2 border-secondary p-3 rounded shadow zoom" data-magnify-src="{{ page.img_path | relative_url | append: 'plano-estacionamientos.png'}}">
	</div>
</div>

<script>
window.onload = function() {
  document.addEventListener("contextmenu", function(e){
    e.preventDefault();
  }, false);
} 
</script>