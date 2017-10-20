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

export function fetchComments(id) {
  const url = `${host}/api/wines/${id}/comments`;
  console.debug(`GET ${url}`);
  return fetch(url).then(r => r.json());
}

export function fetchLiked(id) {
  const url = `${host}/api/wines/${id}/like`;
  console.debug(`GET ${url}`);
  return fetch(url).then(r => r.json());
}

export function likeWine(id) {
  const url = `${host}/api/wines/${id}/like`;
  console.debug(`POST ${url}`);
  return fetch(url, {
    method: 'POST',
    // credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ like: true }),
  });
}

export function unlikeWine(id) {
  const url = `${host}/api/wines/${id}/like`;
  console.debug(`POST ${url}`);
  return fetch(url, {
    method: 'POST',
    // credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ like: false }),
  });
}

export function commentWine(id, content) {
  const url = `${host}/api/wines/${id}/comments`;
  console.debug(`POST ${url}`);
  return fetch(url, {
    method: 'POST',
    // credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title: 'Auto Generated Title', content }),
  });
}
