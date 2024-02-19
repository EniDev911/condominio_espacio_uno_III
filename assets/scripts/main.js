import { cargarDepartamentos } from "./pre-carga.js"
import { formatDate } from "./utilities.js"
import "./handlers.js";

// tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

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
  cargarDepartamentos();
  $('select').bsSelectDrop({
    search: true,
    btnWidth: 'fit-content',
    btnEmptyText: 'Selecciona Departamento',
    btnClass: 'btn btn-light w-100 text-dark',
    menuPreHtml:'<b>Departamentos</b>',
      // menuAppendHtml:'<b>End</b>',
      dropCenter:true,
      showActionMenu:true
    });
  // $(function () {
  //   $('.date').datetimepicker({
  //     "locale": 'es',
  //     "allowInputToggle": true,
  //     "showClose": true,
  //     "showClear": true,
  //     "showTodayButton": true,
  //     "format": "DD/MM/YYYY",
  //     "defaultDate": new Date()
  //   });
  // });

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
