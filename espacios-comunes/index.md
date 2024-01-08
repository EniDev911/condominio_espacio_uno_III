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


<div class="row g-3 justify-content-center mt-5">
	{% for item in site.data.espacios_comunes %}
	<div class="col-10 col-md-6 col-lg-4">
		{% include card.html
			id=forloop.index0
			title=item.title
			text=item.text
			href=item.url
			img=item.img
		%}
	</div>
	{% endfor %}
</div>