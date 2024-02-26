import fichaDeArriendo from "./ficha-arriendo.js"

// tooltip
// const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
// export let signaturePad = null;


function initApplication() {

  if (document.title.includes('ficha residente')) {
    fichaDeArriendo();
  }

}

document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    initApplication();
  }
};
