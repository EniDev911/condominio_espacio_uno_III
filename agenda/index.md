---
layout: page
title: "Agenda"
banner: true
bannerimg: /assets/contactos.png
---

{% include banner.html %}

{% if site.data.servicios %}
  {% for item in site.data.servicios %}
  <p>{{ item.nombre }}  <a href="tel:+{{ item.telefono }}" class="text-decoration-none text-dark">+{{ item.telefono }} <i class="fas fa-phone me-3"></i></a></p>
  {% endfor %}
{% else %}
  <p>No hay nada aún </p>
{% endif %}

