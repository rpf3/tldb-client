const baseApiUrl = 'http://localhost:5000';

async function send({ path }) {
	return fetch(baseApiUrl + path).then((r) => r.json());
}

export function get(path) {
	return send({ path });
}
