import fichaDeArriendo from "./ficha-arriendo.js"

// tooltip
// const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
// export let signaturePad = null;


function initApplication() {

  if (document.title.includes('ficha residente')) {
    fichaDeArriendo();
  }
  document.querySelectorAll("img[alt*='img']").forEach(element => {
  element.style.cursor = "zoom-in";
  element.addEventListener("click", () => {
    let params = 'width='+screen.width;
      params += ', height='+screen.height;
      params += ', top=0, left=0';
      params += ', scrollbars=no';
     window.open(element.src, '_blank', params);
    })
  })

}

document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    initApplication();
  }
};
