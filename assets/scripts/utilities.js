export function formatDate(date) {
	return new Intl.DateTimeFormat("es-ES", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
		timeZone: "America/Santiago"
	}).format(date)
}