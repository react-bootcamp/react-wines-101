export const host = 'https://wines-api.herokuapp.com';

export function fetchRegions() {
  const url = `${host}/api/regions`;
  console.debug(`GET ${url}`);
  return fetch(url).then(r => r.json());
}

export function fetchWinesFrom(region) {
  const url = `${host}/api/wines?region=${region}`;
  console.debug(`GET ${url}`);
  return fetch(url).then(r => r.json());
}

export function fetchWine(id) {
  const url = `${host}/api/wines/${id}`;
  console.debug(`GET ${url}`);
  return fetch(url).then(r => r.json());
}
