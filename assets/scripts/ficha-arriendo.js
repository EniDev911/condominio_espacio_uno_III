import { on, get, selectorAll } from './utilities.js'
import {
	handleOnInputRut,
	agregarResidente,
	removerResidente,
	handleOnClickFirmar,
	handleOnChangeRadio,
	counterIncrement
} from './handlers.js'

export default function () {
	alert('cargando..')
	on('input', 'input[id^="rut"]', handleOnInputRut);
	on('click', 'button[id^="close"]', removerResidente);
	on('click', 'button[id="btn_agregar"]', agregarResidente);
	on('click', 'button[id="btn_firmar"]', handleOnClickFirmar);
	on('change', 'button[id="btn_firmar"]', handleOnClickFirmar);
	selectorAll("input[type='radio']", 'change', handleOnChangeRadio);
	selectorAll('.plus', 'click', counterIncrement);
}