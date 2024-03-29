export function setQuery(params) {
	if (history.pushState) {
		let { search, protocol, host, pathname } = window.location
		let qs = new URLSearchParams(search);
		Object.entries(params).forEach(([key, value]) => qs.set(key, value))
		let newurl = protocol + "//" + host + pathname + '?' + qs.toString();
		history.pushState({ path: newurl }, '', newurl);
	}
}

export function deleteQuery(){
	if (history.pushState) {
		let { protocol, host, pathname } = window.location
		let newurl = protocol + "//" + host + pathname;
		history.pushState({ path: newurl }, '', newurl);
	}
}