import { on, get, formatDate, selectorAll } from './utilities.js'
import {
	handleOnInputRut,
	agregarResidente,
	removerResidente,
	handleOnClickFirmar,
	handleOnChangeRadio,
	counterIncrement,
	decrementCounter,
	generatePDF,
	onChangeDominio
} from './handlers.js'

export default function () {
	on('input', 'input[id^="rut"]', handleOnInputRut);
	on('click', 'button[id^="close"]', removerResidente);
	on('click', 'button[id="btn_agregar"]', agregarResidente);
	on('click', 'button[id="btn_firmar"]', handleOnClickFirmar);
	on('change', 'button[id="btn_firmar"]', handleOnClickFirmar);
	selectorAll("input[type='radio']", 'change', handleOnChangeRadio);
	on('submit', '#form', generatePDF);
	selectorAll('.plus', 'click', counterIncrement);
	selectorAll('.minus', 'click', decrementCounter);
	on('change', '.select-dominio', onChangeDominio);
	// on('click', '#dominio_correo', lol)

	$('.selectpicker').selectpicker('setStyle', 'text-dark btn-light text-uppercase');

	const configDatePicker = {
		uiLibrary: 'bootstrap5',
		locale: 'es-es',
		format: 'dd/mm/yyyy',
		header: true,
		size: 'default',
		iconsLibrary: 'fontawesome'
	}
	$('#f_ingreso').datepicker({
		...configDatePicker,
		value: formatDate(new Date())
	});
	$('#f_salida').datepicker({
		...configDatePicker,
		value: formatDate(new Date().setDate(new Date().getDate() + 1))
	});

}