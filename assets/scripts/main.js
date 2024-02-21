import fichaDeArriendo from "./ficha-arriendo.js"

// tooltip
// const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
// export let signaturePad = null;


function initApplication() {

  if (document.title.includes('ficha residente')) {
    fichaDeArriendo();
  }
// $('.selectpicker').selectpicker('setStyle','text-dark btn-light text-uppercase');


//   const configDatePicker = {
//     uiLibrary: 'bootstrap5',
//     locale: 'es-es',
//     format: 'dd/mm/yyyy',
//     header: true,
//     size: 'default',
//     iconsLibrary: 'fontawesome'
//   }
//   $('#f_ingreso').datepicker({
//     ...configDatePicker,
//     value: formatDate(new Date())
//   });
//   $('#f_salida').datepicker({
//     ...configDatePicker,
//     value: formatDate(new Date().setDate(new Date().getDate() +1))
//   });
}

document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    initApplication();
  }
};
