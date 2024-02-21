export function residente(num) {
	return `
	<section class="p-3 border residente" style="background-color: #fff;" id="residente_${num}">
	<button type="button" class="btn btn-danger float-end" id="close${num}">&times;</button>
	<h3 class="text-dark text-uppercase text-center mb-4">Residente ${num}</h3>
	<div class="row mt-3">
	<div class="col-12 mb-3">
	<label for="nombre_r${num}" class="form-label">Nombres y apellidos: </label>
	<input type="text" name="nombre_r${num}" class="form-control text-capitalize" id="nombre_r1" placeholder="Nombres, apellidos Residente ${num}" required>
	</div>
	</div>
	<div class="row g-3">
	<div class="col-12 col-md-6">
	<label for="rut_r${num}" class="form-label">Rut:</label>
	<input type="tel" name="rut_r${num}" id="rut_r${num}" placeholder="Rut Residente ${num}" class="form-control" required>
	</div>
	<div class="col-12 col-md-6">
	<label for="tel_r${num}" class="form-label">Teléfono</label>
	<input type="tel" name="tel_r1" id="tel_r${num}" class="form-control" placeholder="Teléfono Residente ${num}">
	</div>
	<div class="col-12">
	<label for="trabajo_r${num}" class="form-label">Lugar de trabajo y/o Estudio</label>
	<input type="text" class="form-control" name="trabajo_r${num}" id="trabajo_r${num}" placeholder="Lugar de trabajo Residente ${num}">
	</div>
	</div>
	</section>`
}