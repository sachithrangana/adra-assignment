export function formatUrl (baseUrl, route, params) {
  let url = baseUrl.concat(route);
  for (let prop in params) {
    url = url.replace(':'.concat(prop), params[prop])
  }
  if (params && params.queryParams) {
    url = addQueryParameters(url, params.queryParams)
  }
  return url;
};
