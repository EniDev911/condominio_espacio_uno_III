---
layout: page
title: "Agenda"
banner: true
bannerimg: /assets/contactos.png
---

{% include banner.html %}

{% if site.data.servicios %}
  {% for item in site.data.agenda %}
  <div class="card p-3 d-inline-block me-3 shadow-sm">
   <div class="card-header">
	<strong>{{ item.nombre | upcase }}</strong>  		
   </div>
  <a href="tel:+{{ item.telefono }}" class="text-decoration-none text-dark"><i class="fas fa-phone me-2"></i> +{{ item.telefono }}</a><br><a href="mailto:{{ item.email }}" class="text-decoration-none text-dark"><i class="fa-solid fa-envelope me-2 text-dark"></i> {{ item.email }}</a></div>
  {% endfor %}
{% else %}
  <p>No hay nada aún </p>
{% endif %}

