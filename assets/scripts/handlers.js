import { formatDate, addOneYear, darFormatoRUT, formatName, get } from "./utilities.js"

// get("form").addEventListener("submit", async (event) => {
// 	event.preventDefault();
// 	const doc = new jsPDF('p', 'pt', 'A4');
// 	const dpto = document.getElementById("dpto");
// 	const tipo_residente = document.querySelector('input[name="tipo_residente"]:checked').value;
// 	const ingreso = get("f_ingreso").value;
// 	const salida = get("f_salida").value;
// 	const nombre_prop = document.getElementById("nombre_prop").value;
// 	const rut_prop = document.getElementById("rut_prop").value;
// 	const tel_prop = document.getElementById("tel_prop").value;
// 	const mail_prop = get("correo_prop").value;
// 	const nombre_corredora = document.getElementById("nombre_corredora").value;
// 	const rut_corredora = document.getElementById("rut_corredora").value;
// 	const tel_corredora = document.getElementById("tel_corredora").value;
// 	const mail_corredora = get("correo_corredora").value;
// 	const residentes = document.querySelectorAll(".residente");
// 	const aut_mascota = document.querySelector('input[name="autorizacion_mascota"]:checked').value;
// 	const cantidad_gatos = get("cant_gatos").textContent;
// 	const cantidad_perros = get("cant_perros").textContent;
// 	const patente = get("patente").value;
// 	const marca = get("marca").value;
// 	const firma = signaturePad.toDataURL();

// 	var xOffset = doc.internal.pageSize.width / 2;
// 	let yOffset = 25
// 	doc.setFontSize(20);
// 	doc.addImage(firma, 'PNG', 300, 765, 400, 60);
// 	doc.text("Condominio Espacio Uno III", xOffset, yOffset,'center');
// 	doc.setFontSize(12);
// 	doc.text("Ficha de Residente", xOffset,(yOffset += 20),'center');
// 	doc.setFontSize(20);
// 	doc.text("DPTO. "+dpto.value, xOffset, (yOffset += 23), 'center');
// 	doc.setFontSize(12);
// 	doc.setFont(undefined, 'bold').text(tipo_residente.toUpperCase(), 40, (yOffset += 20));
// 	doc.text("INGRESO:" ,315, yOffset);
// 	doc.setFont(undefined, 'normal').text(ingreso, (320 + doc.getTextWidth("INGRESO:")), yOffset)
// 	doc.setFont(undefined, 'bold').text("SALIDA:" , 450, yOffset);
// 	doc.setFont(undefined, 'normal').text(salida, (455 + doc.getTextWidth("SALIDA:")), yOffset)
// 	doc.setDrawColor(0, 0, 0);
// 	doc.line(25, (yOffset += 10), 570, (yOffset));
// 	doc.line(25, 98, 25, 828);
// 	doc.line(570, 98, 570, 828);
// 	doc.setFont(undefined, 'bold').text("DATOS DEL PROPIETARIO", 40, (yOffset += 20));
// 	doc.setDrawColor(255, 0, 0);
// 	doc.line(40, (yOffset += 5), 40 + doc.getTextWidth("DATOS DEL PROPIETARIO"), yOffset)
// 	doc.text("Nombre:", 40, (yOffset += 20));
// 	doc.setFont(undefined, 'normal').text(formatName(nombre_prop), (50 + doc.getTextWidth("Nombre:")), yOffset);
// 	doc.setFont(undefined, 'bold').text("Rut:", 40, (yOffset += 20));
// 	doc.setFont(undefined, 'normal').text(rut_prop, (45 + doc.getTextWidth("Rut:")), yOffset);
// 	// PHONE
// 	doc.setFont(undefined, 'bold').text("Télefono:", 200, yOffset);
// 	doc.setFont(undefined, 'normal').text(tel_prop, (210 + doc.getTextWidth("Télefono:")), yOffset);
// 	// MAIL
// 	doc.setFont(undefined, 'bold').text("Correo:", 40, (yOffset += 20));
// 	doc.setFont(undefined, 'normal').text(mail_prop, (50 + doc.getTextWidth("Correo")) , yOffset);
// 	doc.setDrawColor(0, 0, 0);
// 	doc.line(25, (yOffset += 10), 570, yOffset);
// 	// CORREDORA
// 	doc.setFont(undefined, 'bold').text("DATOS CORREDORA O ENCARGADO", 40, (yOffset += 20));
// 	doc.setDrawColor(255, 0, 0);
// 	doc.line(40, (yOffset += 5), 40 + doc.getTextWidth("DATOS CORREDORA O ENCARGADO"), yOffset)
// 	doc.text("Nombre:", 40, (yOffset += 20));
// 	doc.setFont(undefined, 'normal').text(formatName(nombre_corredora), (50 + doc.getTextWidth("Nombre:")), yOffset);
// 	// RUT
// 	doc.setFont(undefined, 'bold').text("Rut:", 40, (yOffset += 20));
// 	doc.setFont(undefined, 'normal').text(rut_corredora, (45 + doc.getTextWidth("Rut:")), yOffset);
// 	// PHONE
// 	doc.setFont(undefined, 'bold').text("Télefono:", 200, yOffset);
// 	doc.setFont(undefined, 'normal').text(tel_corredora, (210 + doc.getTextWidth("Télefono:")), yOffset);
// 	// MAIL
// 	doc.setFont(undefined, 'bold').text("Correo:", 40, (yOffset += 20));
// 	doc.setFont(undefined, 'normal').text(mail_corredora, (50 + doc.getTextWidth("Correo")) , yOffset);
// 	doc.setDrawColor(0, 0, 0);
// 	doc.line(25, (yOffset += 10), 570, yOffset);

// 	for (var i = 1; i < 6; i++) {
// 		yOffset += 20;
// 		doc.setFont(undefined, 'bold').text(`RESIDENTE ${i}`, xOffset, yOffset,'center');
// 		// console.log(element.querySelector(`#nombre_r`${index+1}));
// 		// NOMBRE
// 		doc.text("Nombre:", 40, (yOffset += 20));
// 		if (document.querySelector(`#nombre_r${i}`) !== null) {
// 			doc.setFont(undefined, 'normal').text(formatName(document.querySelector(`#nombre_r${i}`).value), (50 + doc.getTextWidth("Nombre:")), yOffset);
// 		}
// 		// RUT
// 		doc.setFont(undefined, 'bold').text("Rut:", 40, (yOffset += 20));
// 		if (document.querySelector(`#rut_r${i}`) !== null) {
// 			doc.setFont(undefined, 'normal').text(document.querySelector(`#rut_r${i}`).value, (45 + doc.getTextWidth("Rut:")), yOffset);
// 		}
// 		 // PHONE
// 		 doc.setFont(undefined, 'bold').text("Télefono:", 200, yOffset);
// 		 if (document.querySelector(`#tel_r${i}`) !== null) {
// 		 	doc.setFont(undefined, 'normal').text(document.querySelector(`#tel_r${i}`).value, (210 + doc.getTextWidth("Télefono:")), yOffset);
// 		 }
// 		// LUGAR DE TRABAJO
// 		doc.setFont(undefined, 'bold').text("Lugar de trabajo:", 40, (yOffset += 20));
// 		if (document.querySelector(`#trabajo_r${i}`) !== null) {
// 			doc.setFont(undefined, 'normal').text(document.querySelector(`#trabajo_r${i}`).value, (55 + doc.getTextWidth("Lugar de trabajo:")) , yOffset);
// 		}
// 		// LINE
// 		doc.line(25, (yOffset += 10), 570, yOffset);
// 	}

// 	doc.setFont(undefined, 'bold').text("Cantidad total de personas:", 40, (yOffset += 20));
// 	doc.text("Firma responsable:", 430, yOffset);
// 	doc.setFont(undefined, 'normal').text(residentes.length.toString(), (55 + doc.getTextWidth("Cantidad total de personas:")), yOffset);
// 	doc.setFont(undefined, 'bold').text("Propietario autoriza mascota:", 40, (yOffset += 20));
// 	doc.setFont(undefined, 'normal').text(aut_mascota, (55 + doc.getTextWidth("Propietario autoriza mascota:")), yOffset);
// 	doc.setFont(undefined, 'bold').text("Gatos:", 230, yOffset);
// 	doc.setFont(undefined, 'normal').text(cantidad_gatos, (235 + doc.getTextWidth("Gatos:")), yOffset);
// 	doc.setFont(undefined, 'bold').text("Perros:", 285, yOffset);
// 	doc.setFont(undefined, 'normal').text(cantidad_perros, (290 + doc.getTextWidth("Perros:")), yOffset);
// 	doc.setFont(undefined, 'bold').text("Vehículo:", 40, (yOffset += 20));
// 	doc.setFont(undefined, 'normal').text(marca.toUpperCase(), (50 + doc.getTextWidth("Vehículo:")), yOffset);
// 	doc.setFont(undefined, 'bold').text("Patente:", 40, (yOffset += 20));
// 	doc.setFont(undefined, 'normal').text(patente.toUpperCase(), (50 + doc.getTextWidth("Patente:")), yOffset);
// 	doc.line(25, (yOffset += 10), 570, yOffset);
// 	if (signaturePad.isEmpty()) {
// 		Swal.fire({
// 			title: "Debe firmar antes de descargar el PDF",
// 			animation: false
// 		})
// 	} else {
// 		doc.output('save', new Date().toISOString().split('T')[0] + '_'+ dpto.value + '.pdf')
// 		// doc.output('dataurlnewwindow', { filename: 'archivo.pdf'})
// 		location.reload();
// 	}
// })


export function handleOnChangeRadio(event) {
	const dateNow = new Date()
	if (event.target.id === "turistas"){
		get("f_ingreso").value = formatDate(dateNow);
		get("f_salida").value = formatDate(dateNow.setDate(dateNow.getDate() +1));
	}
	else if (event.target.id === "anio_corrido") {
		get("f_ingreso").value = formatDate(dateNow);
		get("f_salida").value = formatDate(addOneYear(dateNow));
	} else if (event.target.id === "mar_dic") {
		get("f_salida").value = "31/12/"+dateNow.getFullYear()
	} else if (event.target.id === "si") {
		get("box_mascotas").classList.remove("d-none");
	}else if (event.target.id === "no") {
		get("box_mascotas").classList.add("d-none");
		get('cant_perros').textContent = 0;
		get('cant_gatos').textContent = 0;
	}
}

// document.querySelectorAll("input[type='radio']").forEach((input) => {
// 	input.addEventListener('change', handleOnChangeRadio);
// });

// // increment counter
// document.querySelectorAll(".plus").forEach((ele, index) => {
// 	ele.addEventListener("click", () => {
// 		const perros = parseInt(get('cant_perros').textContent);
// 		const gatos = parseInt(get('cant_gatos').textContent);
// 		index === 0 && perros < 5
// 		? get('cant_perros').textContent = perros + 1
// 		: index === 1 && gatos < 5 ? get('cant_gatos').textContent = gatos + 1 : ''
// 	});
// })

export function counterIncrement(e) {
	const esPerro = e.target.classList.contains('dog');
	const esGato = e.target.classList.contains('cat');
	const perros = parseInt(get('cant_perros').textContent);
	const gatos = parseInt(get('cant_gatos').textContent);
	esPerro && perros < 5
	? get('cant_perros').textContent = perros + 1
	: esGato && gatos < 5 ? get('cant_gatos').textContent = gatos + 1 : ''
}


export function decrementCounter(e) {
	const esPerro = e.target.classList.contains('dog');
	const esGato = e.target.classList.contains('cat');
	const perros = parseInt(get('cant_perros').textContent);
	const gatos = parseInt(get('cant_gatos').textContent);
	esPerro && perros < 5
	? get('cant_perros').textContent = perros + 1
	: esGato && gatos < 5 ? get('cant_gatos').textContent = gatos + 1 : ''
}

// // decrement counter
// document.querySelectorAll(".minus").forEach((ele, index) => {
// 	ele.addEventListener("click", () => {
// 		const perros = parseInt(get('cant_perros').textContent);
// 		const gatos = parseInt(get('cant_gatos').textContent);
// 		index === 0 && perros > 0
// 		? get('cant_perros').textContent = perros - 1
// 		: index === 1 && gatos > 0 ? get('cant_gatos').textContent = gatos - 1 : ''
// 	});
// })


import { residente } from './templates.js';
let aux = 1;
export function agregarResidente(e) {
	if (aux < 5){
		aux++;
		let html = get(`residente_${aux-1}`);
		html.insertAdjacentHTML('afterend', residente(aux));
	} else {
		e.target.style.display = 'none';
		alert("El límite son 5 residentes");
	}

}
export function removerResidente(e) {
	let isHiddenButton = get('btn_agregar').style.display === 'none';
	e.target.parentElement.remove();
	aux--;
	actualizarResidentes();
	isHiddenButton ? get('btn_agregar').style.display ='block' : null
}

function actualizarResidentes() {
	const residentes = document.querySelectorAll(".residente");
	residentes.forEach((node, i) => {
		node.id = "residente_" + (i + 1);
		node.getElementsByTagName("h3")[0].textContent = "RESIDENTE " + (i + 1);
		// input name
		node.querySelectorAll("input")[0].id="nombre_r" + (i + 1);
		node.querySelectorAll("input")[0].name="nombre_r" + (i + 1);
		node.querySelectorAll("input")[0].placeholder="Nombre residente " + (i + 1);
		// input rut
		node.querySelectorAll("input")[1].id="rut_r" + (i + 1);
		node.querySelectorAll("input")[1].name="rut_r" + (i + 1);
		node.querySelectorAll("input")[1].placeholder="Rut residente " + (i + 1);
		// input phone
		node.querySelectorAll("input")[2].id="tel_r" + (i + 1);
		node.querySelectorAll("input")[2].name="tel_r" + (i + 1);
		node.querySelectorAll("input")[2].placeholder="Teléfono residente " + (i + 1);
		// input lugar de trabajo
		node.querySelectorAll("input")[3].id="trabajo_r" + (i + 1);
		node.querySelectorAll("input")[3].name="trabajo_r" + (i + 1);
		node.querySelectorAll("input")[3].placeholder="Lugar de trabajo o estudio residente " + (i + 1);
	})
}

export function handleOnInputRut(e) {
	e.target.value = darFormatoRUT(e.target.value);
}

let activate = false;

export function handleOnClickFirmar(e) {
	let signaturePad = null;
	if (activate) {

	} else {
		const canvas = get("signature-canvas");
		canvas.height = canvas.offsetHeight;
		canvas.width = canvas.offsetWidth;
		signaturePad = new SignaturePad(canvas, {});
		canvas.style.visibility = 'visible';
		document.querySelector(".signature").style.height = '200px';
		const div = document.createElement('div');
		div.textContent = 'Resetear firma'
		div.classList.add("btn", "btn-primary")
		div.style.marginBottom = '5px';
		div.id = "resetear_firma";
		div.onclick = function() {
			signaturePad.clear();
		}
		get('btn_firmar').insertAdjacentElement("afterend", div);
		e.target.style.display = 'none'
		activate = true;
	}
}


