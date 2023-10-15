---
layout: default
title: "Normas generales"
subtitle: "Informese sobre las normas que rigen el adecuado funcionamiento de nuestra comunidad"
---


<div class="row">
	{% for item in site.data.normas %}
	<div class="col-10 col-md-6 col-lg-3" onclick="window.location.href = '{{ item.link }}'" style="cursor: pointer;">
		<div class="card">
			<div class="card-header">
				<div class="card-body">
					<h5 class="card-title text-center">
					<i class="{{ item.icon }}"></i> {{ item.nombre }}
					</h5>
				</div>
			</div>
		</div>
	</div>
	{% endfor %}
</div>

