---
layout: page
title: "Agenda"
banner: true
bannerimg: /assets/contactos.png
---

{% include banner.html %}

{% if site.data.servicios %}
<div class="row g-3 bg-light my-4 pb-2 rounded">
  {% for item in site.data.agenda %}
  <div class="col-12 col-lg-4">
	  <div class="card p-3 bg-body shadow-sm">
	   <div class="card-header mb-2 bg-info">
		<strong>{{ item.nombre | upcase }}</strong>
	   </div>
		<div class="card-body">  		
	  <a href="tel:+{{ item.telefono }}" class="text-decoration-none text-dark"><i class="fas fa-phone me-2"></i> +{{ item.telefono }}</a><br>
		<a href="mailto:{{ item.email }}" class="text-decoration-none text-dark"><i class="fa-solid fa-envelope me-2 text-dark"></i> {{ item.email }}</a>
		</div>	
		 <div class="d-flex justify-content-evenly">
		 <a class="btn btn-secondary rounded-circle" href="tel:+{{ item.telefono }}"><i class="fas fa-phone"></i></a>
		 <a class="btn btn-danger rounded-circle" href="mailto:{{ item.email }}"><i class="fas fa-envelope"></i></a>
		 </div>
		</div>
	</div>
  {% endfor %}
</div>
{% else %}
  <p>No hay nada aún </p>
{% endif %}

