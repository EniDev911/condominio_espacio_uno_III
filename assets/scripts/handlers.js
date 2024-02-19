import { formatDate } from "./utilities.js"

function handleOnChangeRadio(event) {
	if (event.target.id === "turistas"){
		const dateNow = new Date()
		document.getElementById("f_ingreso").value = formatDate(dateNow);
		document.getElementById("f_salida").value = formatDate(dateNow.setDate(dateNow.getDate() +1));
	}
	else if (event.target.id === "anio_corrido") {
	} else if (event.target.id === "mar_dic") {
		document.getElementById("f_salida").value = "31/12/"+date.getFullYear()
	} else if (event.target.id === "si") {
		document.getElementById("box_mascotas").classList.remove("d-none");
	}else if (event.target.id === "no") {
		document.getElementById("box_mascotas").classList.add("d-none");
	}
}

document.querySelectorAll("input[type='radio']").forEach((input) => {
	input.addEventListener('change', handleOnChangeRadio);
});