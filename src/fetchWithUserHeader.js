// Utility to wrap fetch and always add X-User header
export function fetchWithUserHeader(input, init = {}) {
  const headers = new Headers(init.headers || {});
  headers.set('X-User', 'test');
  return fetch(input, { ...init, headers });
}
