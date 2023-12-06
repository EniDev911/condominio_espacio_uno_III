---
layout: default
title: "Normas Quincho"
subtitle: "El Quincho es un espacio común y se aplican todas las normas internas de convivencia y reglamentos del condominio"
banner: true
bannerimg: /assets/quincho_b.jpg
---

{% if page.banner %}
	{% include banner.html %}
{% else %}
 	{% include main_banner.html %}
{% endif %}

---

{% include visor_pdf.html
	pdf='/assets/pdfs/uso_quincho.pdf'
%}

<!-- <ul class="list-group list-group-flush py-3">
	{% for item in site.data.normas[0].lista %}
		<li class="list-group-item list-group-item-warning mb-1 shadow">&#x1F4CD; {{ item | upcase }}</li>
	{% endfor %}
</ul> -->

<!-- Google Calendar Appointment Scheduling begin -->
<link href="https://calendar.google.com/calendar/scheduling-button-script.css" rel="stylesheet">
<script src="https://calendar.google.com/calendar/scheduling-button-script.js" async></script>
<style type="text/css">
	svg {
		display: none !important;
	}
</style>
<script>
(function() {
  var target = document.currentScript;
  window.addEventListener('load', function() {
    calendar.schedulingButton.load({
      url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ25Y3NUgO9rMe0WwnxB9AgTLp5Hq8xxNuVuXfj1xIa9zlK3IdoMzwDa1XuYhIZTB3jycTFZqfhM?gv=true',
      color: '#039BE5',
      label: "Reservar quincho",
      target,
    });
  });
  document.querySelector(".Evpc9c").classList.remove('Evpc9c')
})();
</script>
<!-- end Google Calendar Appointment Scheduling -->


{% include horarios_quincho.html %}


{% include galeria_quincho.html %}

<div class="alert alert-warning text-center my-3">
El quincho debe ser entregado en condiciones optimas, tal como lo muestra las ilustraciones anteriores.</div>