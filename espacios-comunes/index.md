---
layout: default
title: Espacios comunes
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