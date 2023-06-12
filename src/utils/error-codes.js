const ClientErrors = Object.freeze({
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
});

const ServerErrors = Object.freeze({
  INTERNAL_SERVER_ERRORS: 500,
  NOT_IMPLEMENTATED: 501,
});

const SuccessCodes = Object.freeze({
  CREATED: 201,
  OK: 200,
});

module.exports = {
  ClientErrors,
  ServerErrors,
  SuccessCodes,
};
