export function residente(num) {
	return `
	<section class="p-3 border residente" style="background-color: #fff;" id="residente_${num}">
	<button type="button" class="btn btn-danger float-end" id="close${num}">&times;</button>
	<h3 class="text-dark text-uppercase text-center mb-4">Residente ${num}</h3>
	<div class="row mt-3">
	<div class="col-12 mb-3">
	<label for="nombre_r${num}" class="form-label">Nombres y apellidos: </label>
	<input type="text" name="nombre_r${num}" class="form-control text-capitalize" id="nombre_r${num}" placeholder="Nombres, apellidos Residente ${num}" required>
	</div>
	</div>
	<div class="row g-3">
	<div class="col-12 col-md-6">
	<label for="rut_r${num}" class="form-label">Rut <span class="text-danger">*</span>:</label>
	<small class="text-danger" style="white-space: pre;">(si termina en k, remplazar por 0)</small>
	<div class="input-group">
	<input type="tel" name="rut_r${num}" id="rut_r${num}" placeholder="Rut Residente ${num}" class="form-control" required>
	<button type="button" class="btn btn-secondary" onclick="rut_r${num}.value = ''">borrar</button>
	</div>
	</div>
	<div class="col-12 col-md-6">
	<label for="tel_r${num}" class="form-label">Teléfono <span class="text-danger">*</span>:</label>&nbsp;<a href='javascript:void(0)' class='text-decoration-none bg-primary rounded text-light px-2' onclick="tel_r${num}.value = tel_r${num - 1}.value">repetir anterior</a>
	<div class="input-group">
	<input type="tel" name="tel_r${num}" id="tel_r${num}" class="form-control" placeholder="Teléfono Residente ${num}" required>
	<button type="button" class="btn btn-secondary" onclick="tel_r${num}.value = ''">borrar</button>
	</div>
	</div>
	<div class="col-12">
	<label for="trabajo_r${num}" class="form-label">Lugar de trabajo y/o Estudio</label>
	<input type="text" class="form-control" name="trabajo_r${num}" id="trabajo_r${num}" placeholder="Lugar de trabajo Residente ${num}">
	</div>
	</div>
	</section>`
}