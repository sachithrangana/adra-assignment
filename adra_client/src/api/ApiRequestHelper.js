export function formatUrl (baseUrl, route, params) {
  let url = baseUrl.concat(route);
  for (let prop in params) {
    url = url.replace(':'.concat(prop), params[prop])
  }
  return url;
};
