// Delegación de eventos
export function on(eventName, selector, handler) {
  document.addEventListener(eventName, function(event) {
    const elements = document.querySelectorAll(selector);
    const path = event.composedPath();
    path.forEach(function(node) {
      elements.forEach(function(elem) {
        if (node === elem) {
          handler.call(elem, event);
        }
      });
    });
  }, true);
}

export let get = (id) => document.getElementById(id);


export function formatDate(date) {
	return new Intl.DateTimeFormat("es-ES", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
		timeZone: "America/Santiago"
	}).format(date)
}

export function addOneYear(date) {
	date.setFullYear(date.getFullYear() + 1);
	return date;
}

// dar formato XX.XXX.XXX-X
export function darFormatoRUT(rut) {
  // dejar solo números y letras 'k'
  const rutLimpio = rut.replace(/[^0-9kK]/g, '');

  // asilar el cuerpo del dígito verificador
  const cuerpo = rutLimpio.slice(0, -1);
  const dv = rutLimpio.slice(-1).toUpperCase();

  if (rutLimpio.length < 2) return rutLimpio;

  // colocar los separadores de miles al cuerpo
  let cuerpoFormatoMiles = cuerpo
  .toString()
  .split('')
  .reverse()
  .join('')
  .replace(/(?=\d*\.?)(\d{3})/g, '$1.');

  cuerpoFormatoMiles = cuerpoFormatoMiles
  .split('')
  .reverse()
  .join('')
  .replace(/^[\.]/, '');

  return `${cuerpoFormatoMiles}-${dv}`;
}

export function formatName(names){
  const ans = names.toLowerCase();
  const nameSplit = ans.split(" ");

  const arrNames = nameSplit.map(function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });

  return arrNames.join(" ")
}

export let selectorAll = (selector, eventName, handler) =>  {
  const elements = document.querySelectorAll(selector);
  elements.forEach((ele, index) => {
    ele.addEventListener(eventName, handler)
  })
}
