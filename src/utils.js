export async function getData(url = '', body = '') {
  const response = await fetch(url, {
    body: body,
  });
  const data = await response.json();
  return data;
}
