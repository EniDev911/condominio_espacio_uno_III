---
layout: page
title: Estacionamientos
subtitle: "Estacionamientos del condominio"
img_path: /assets/imgs/espacios-comunes/
---

<style>
	.img-zoom-result {
		background-color: teal;
		width: 260px;
		height: 260px;
		border: 2px solid black;
		border-radius: 50%;
		box-shadow: 3px 2px 9px 3px #ccc;
}

.img-zoom-lens {
  position: absolute;
  border: 1px solid red;
  width: 40px;
  height: 40px;
}
</style>

<script>
	function imageZoom(imgID, resultID) {
  var img, lens, result, cx, cy;
  img = document.getElementById(imgID);
  result = document.getElementById(resultID);

  lens = document.createElement("div");
  lens.setAttribute("class", "img-zoom-lens");

  img.parentElement.insertBefore(lens, img);

  cx = result.offsetWidth / lens.offsetWidth;
  cy = result.offsetHeight / lens.offsetHeight;

  result.style.backgroundImage = "url('" + img.src + "')";
  result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";

  lens.addEventListener("mousemove", moveLens);
  img.addEventListener("mousemove", moveLens);

  lens.addEventListener("touchmove", moveLens);
  img.addEventListener("touchmove", moveLens);

  function moveLens(e) {
    var pos, x, y;
    pos = getCursorPos(e);
    x = pos.x - (lens.offsetWidth / 2);
    y = pos.y - (lens.offsetHeight / 2);
    if (x > img.width - lens.offsetWidth) { x = img.width - lens.offsetWidth; }
    if (x < 0) { x = 0 }
    if (y > img.height - lens.offsetHeight) { y = img.height - lens.offsetHeight; }
    if (y < 0) { y = 0 }
    lens.style.left = x + "px";
    lens.style.top = y + "px";
    result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
  }

  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    a = img.getBoundingClientRect();
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
  }
}
</script>

<div class="row my-5 gap-3 align-items-center justify-content-center">
	<div class="col-12 col-md-6 mx-auto position-relative">
		<img src="{{ page.img_path | relative_url | append: 'plano-estacionamientos.png'}}" alt="estacionamientos" id="original" class="border border-2 border-dark">
	</div>
	<div class="col-12 col-md-4 mx-auto text-center">
		<img id="zoom" class="img-zoom-result">
	</div>
</div>

  <script>
    imageZoom("original", "zoom")
</script>