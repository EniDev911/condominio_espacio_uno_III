---
layout: page
title: "Agenda"
banner: true
bannerimg: /assets/contactos.png
---

{% include banner.html %}

{% if site.data.servicios %}
  {% for item in site.data.agenda %}
  <p><strong>{{ item.nombre | upcase }}</strong><br><a href="tel:+{{ item.telefono }}" class="text-decoration-none text-dark"><i class="fas fa-phone me-2"></i> +{{ item.telefono }}</a><br><a href=""><i class="fa-solid fa-envelope me-2 text-dark"></i> {{ item.email }}</a></p>
  {% endfor %}
{% else %}
  <p>No hay nada aún </p>
{% endif %}

