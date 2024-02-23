import { 
	formatDate, 
	addOneYear, 
	darFormatoRUT, 
	formatName, 
	get,
	query,
	queryAll,
	fetchData } from "./utilities.js"

let signaturePad = null;


function docText(doc, size, style='',text, positionX, positionY){
	doc.setFontSize(size);
	doc.setFont(undefined, style === '' ? 'normal': style);
	switch (positionX) {
		case 'center':
			let xOffset = (doc.internal.pageSize.getWidth() - doc.getTextWidth(text)) / 2
			doc.text(text, xOffset, positionY);
			break;
		case 'right':
			doc.text(text, 40, positionY);
			break;
		default:
			doc.text(text, positionX, positionY);
	}
}


export async function generatePDF(e) {
	e.preventDefault();
	const ficha = await fetchData('/assets/scripts/ficha.json');
	console.log(ficha);
	
	const { jsPDF } = window.jspdf;
	let doc = new jsPDF('p', 'pt', 'A4');

	const imgLogo = new Image();
	imgLogo.src = '/assets/logo.png';
	// doc.addImage(imgLogo, 'PNG', 35, 5, 70, 70);
	doc.line(25, 98, 25, 748);
	doc.line(570, 98, 570, 748);
	
	const firma = signaturePad.toDataURL();


	let posY = 30;
	docText(doc, 20, '', ficha.title.toUpperCase(), 'center', posY);
	docText(doc, 12, '', ficha.subtitle, 'center', (posY += 18));
	docText(doc, 20, '', get("dpto").value, 'center', (posY +=22));
	docText(doc, 12, 'bold', query('input[name="tipo_residente"]:checked').value.toUpperCase(),40, (posY += 20))
	docText(doc, 12, 'bold', "INGRESO:", 305, posY);
	docText(doc, 12, '', get("f_ingreso").value, 370, posY);
	docText(doc, 12, 'bold', "SALIDA:", 440, posY);
	docText(doc, 12, '', get("f_salida").value, 495, posY);
	doc.line(25, (posY += 8), 570, (posY));
	docText(doc, 12, 'bold', ficha.section1.title, 'right', (posY += 20));
	// doc.line(40, (posY += 5), 40 + doc.getTextWidth(ficha.section1.title), posY);
	doc.line(25, (posY += 10), 570, posY);
	docText(doc, 12, 'bold', 'Nombre:', 40, (posY += 20));
	docText(doc, 12, '', formatName(get('nombre_prop').value), 95, posY);
	docText(doc, 12, 'bold', 'Rut:', 40, (posY += 20));
	docText(doc, 12, '', get('rut_prop').value, 70, posY);
	docText(doc, 12, 'bold', 'Teléfono:', 200, posY);
	docText(doc, 12, 'normal', get('tel_prop').value, 260, posY);
	docText(doc, 12, 'bold', 'Correo:', 40, (posY += 20))
	docText(doc, 12, '', get('correo_prop').value, 90, posY)
	doc.line(25, (posY += 10), 570, posY);
	docText(doc, 12, 'bold', ficha.section2.title , 'right', (posY += 20))
	// doc.line(40, (posY += 5), 40 + doc.getTextWidth(ficha.section2.title), posY)
	doc.line(25, (posY += 10), 570, posY);
	docText(doc, 12, 'bold', 'Nombre:', 40, (posY += 20));
	docText(doc, 12, '', formatName(get('nombre_corredora').value), 95, posY);
	docText(doc, 12, 'bold', 'Rut:', 40, (posY += 20));
	docText(doc, 12, '', get('rut_corredora').value, 70, posY);
	docText(doc, 12, 'bold', 'Teléfono:', 200, posY);
	docText(doc, 12, 'normal', get('tel_corredora').value, 260, posY);
	docText(doc, 12, 'bold', 'Correo:', 40, (posY += 20))
	docText(doc, 12, '', get('correo_corredora').value, 90, posY)
	doc.line(25, (posY += 10), 570, posY);
	
		for (var i = 1; i < 6; i++) {
			posY += 20;
			docText(doc, 12, 'bold', `RESIDENTE ${i}`, 'center', posY)
			// NOMBRE
			docText(doc, 12, 'bold', 'Nombre:', 40, (posY += 20));
			get(`nombre_r${i}`) !== null 
				? docText(doc, 12, '', get(`nombre_r${i}`).value, 95, posY)
				: docText(doc, 12, '', '', 95, posY)
			
			// RUT
			docText(doc, 12, 'bold', 'Rut:', 40, (posY += 20));
			get(`rut_r${i}`) !== null
				? docText(doc, 12, '', get(`rut_r${i}`).value, 70, posY)
				: docText(doc, 12, '', '', 70, posY)
			
			// PHONE
			docText(doc, 12, 'bold', 'Teléfono:', 200, posY);
			get(`tel_r${i}`) !== null
				? docText(doc, 12, '', get(`tel_r${i}`).value, 260, posY)
				: docText(doc, 12, '', '', 260, posY)
			
			// LUGAR DE TRABAJO
			docText(doc, 12, 'bold', 'Lugar de trabajo:', 40, (posY += 20));
			get(`trabajo_r${i}`) !== null
				? docText(doc, 12, '', get(`trabajo_r${i}`).value, 145, posY)
				: docText(doc, 12, '', '', 145, posY)
			
			doc.line(25, (posY += 10), 570, posY);
		}
	docText(doc, 12, 'bold', "Patente:", 'right', (posY += 20));
	docText(doc, 12, '', get('patente').value.toUpperCase(), 90, posY);
	docText(doc, 12, 'bold', "Vehículo:", 140, posY);
	docText(doc, 12, '', get('marca').value.toUpperCase(), 200, posY);
	docText(doc, 12, 'bold', 'Firma responsable:', 430, posY);
	docText(doc, 12, 'bold', ficha.mascotas, 'right', (posY += 20));
	docText(doc, 12, '', query('input[name="autorizacion_mascota"]:checked').value.toUpperCase(), (45 + doc.getTextWidth(ficha.mascotas)), posY);
	docText(doc, 12, 'bold', 'Gatos:', 240, posY);
	docText(doc, 12, '', get("cant_gatos").textContent, 280, posY);
	docText(doc, 12, 'bold', 'Perros:', 295, posY);
	docText(doc, 12, '', get("cant_perros").textContent, 340, posY);
	docText(doc, 12, 'bold', 'Cantidad total de personas:', 'right', (posY += 20));
	docText(doc, 12, '', queryAll('.residente').length.toString(), 203, posY);
	doc.addImage(firma, 'PNG', 300, 765, 400, 60);

	docText(doc, 10, '', "Ver las normas de la comunidad en https://condominioespaciouno3.cl/normas", 'right', 830);

	doc.output('dataurlnewwindow', { filename: 'archivo.pdf' })
	// doc.save('archivo.pdf');
}

// 	doc.addImage(firma, 'PNG', 300, 765, 400, 60);

// 	doc.text("Firma responsable:", 430, yOffset);
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
	esPerro && perros > 0
	? get('cant_perros').textContent = perros - 1
	: esGato && gatos > 0 ? get('cant_gatos').textContent = gatos - 1 : ''
}

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


