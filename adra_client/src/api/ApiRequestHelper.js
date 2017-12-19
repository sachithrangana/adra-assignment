const HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

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

function addQueryParameters (url, queryParams) {
  for (let prop in queryParams){
    if(queryParams[prop] === undefined){
      continue;
    }
    if (url.indexOf('?') === -1){
      url += '?'
    } else {
      url += '&';
    }
    url += prop.concat('=');
    if (Array.isArray(queryParams[prop])) {
      url += queryParams[prop].join('&'.concat(prop).concat('='))
    }else {
      url += queryParams[prop]
    }
  }
  return url
}
