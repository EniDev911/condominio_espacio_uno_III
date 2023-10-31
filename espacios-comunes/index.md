---
layout: default
title: Espacios comunes
banner: true
bannerimg: /assets/espacios_comunes.png
links:
  - name: Quincho
    link: quincho
  - name: Piscina
    link: piscina
---



<div>
{% for item in page.links %}
		<a href="{{ page.url | relative_url | append: item.link }}">{{ item.name }}</a>
{% endfor %}
</div>