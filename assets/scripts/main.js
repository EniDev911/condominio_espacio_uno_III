// import { cargarDepartamentos } from "./pre-carga.js"
import { formatDate } from "./utilities.js"
import "./handlers.js";

// tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
export let signaturePad = null;

document.querySelectorAll("img[alt*='img']").forEach(element => {
  element.style.cursor = "pointer";
  element.addEventListener('click', () => {
    let params  = 'width='+screen.width;
    params += ', height='+screen.height;
    params += ', top=0, left=0'
    params += ', fullscreen=yes';
    params += ', directories=no';
    params += ', location=no';
    params += ', menubar=no';
    params += ', resizable=no';
    params += ', scrollbars=no';
    params += ', status=no';
    params += ', toolbar=no';
    window.open(element.src, '_blank', params)
  })
})

function initApplication() {
// fa-regular fa-building
$('.selectpicker').selectpicker('setStyle','text-dark btn-light text-uppercase');

  // cargarDepartamentos();
  const canvas = document.querySelector("canvas");
  canvas.height = canvas.offsetHeight;
  canvas.width = canvas.offsetWidth;
  signaturePad = new SignaturePad(canvas, {});

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
    value: formatDate(new Date().setDate(new Date().getDate() +1))
  });
}

document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    initApplication();
  }
};
