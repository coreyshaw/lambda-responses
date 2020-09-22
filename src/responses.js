const success = (body) => buildResponse(200, body);

const failure = (body) => buildResponse(500, body);

const notFound = (body) => buildResponse(404, body);

function buildResponse(statusCode, body) {
  return {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(body),
  };
}

module.exports = {
  success,
  failure,
  notFound,
};
