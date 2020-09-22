const { expect } = require('chai');
const responses = require('../src/responses');

describe('Responses', () => {
  describe('#success', () => {
    it('returns correct response', () => {
      const test = responses.success({
        success: true,
        data: {},
      });
      expect(test).to.deep.equal({
        'body': '{"success":true,"data":{}}',
        'headers': {
          'Access-Control-Allow-Credentials': true,
          'Access-Control-Allow-Origin': '*',
        },
        'statusCode': 200,
      });
    });
  });

  describe('#failure', () => {
    it('returns correct response', () => {
      const test = responses.failure({
        success: true,
        data: {},
      });
      expect(test).to.deep.equal({
        'body': '{"success":true,"data":{}}',
        'headers': {
          'Access-Control-Allow-Credentials': true,
          'Access-Control-Allow-Origin': '*',
        },
        'statusCode': 500,
      });
    });
  });

  describe('#notFound', () => {
    it('returns correct response', () => {
      const test = responses.notFound({
        success: true,
        data: {},
      });
      expect(test).to.deep.equal({
        'body': '{"success":true,"data":{}}',
        'headers': {
          'Access-Control-Allow-Credentials': true,
          'Access-Control-Allow-Origin': '*',
        },
        'statusCode': 404,
      });
    });
  });
});
