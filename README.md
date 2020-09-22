Lambda Responses
=======================================

[![Build Status](https://travis-ci.org/coreyshaw/lambda-responses.svg?branch=master)](https://travis-ci.org/coreyshaw/lambda-responses)

Simple library to help with lambda responses.

### Success

Call the success function to return the 200 response.

```js
const { success } = require('../utils/responses');

return success({
  status: 'success',
  data: {
    message: 'This is a sample message',
  },
});
```

### Failure

Call the failure function to return the 500 response.

```js
const { failure } = require('../utils/responses');

return failure({
  status: 'failure',
  data: {
    message: 'This is a sample message',
  },
});
```

### Not Found

Call the notFound function to return the 500 response.

```js
const { notFound } = require('../utils/responses');

return notFound({
  status: 'notFound',
  data: {
    message: 'This is a sample message',
  },
});
```
