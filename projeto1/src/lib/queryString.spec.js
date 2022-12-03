const { queryString, parse } = require('./queryString');

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Douglas',
      profession: 'developer',
    };

    expect(queryString(obj)).toBe('name=Douglas&profession=developer');
  });

  it('should create a valid query string even when an array is passed as value', () => {
    const obj = {
      name: 'Douglas',
      abilities: ['JS', 'TDD'],
    };

    expect(queryString(obj)).toBe('name=Douglas&abilities=JS,TDD');
  });

  it('should throw an error when an object is passed as value', () => {
    const obj = {
      name: 'Douglas',
      abilities: {
        first: 'JS',
        second: 'TDD',
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Douglas&profession=developer';

    expect(parse(qs)).toEqual({
      name: 'Douglas',
      profession: 'developer',
    });
  });

  it('should convert a query string of a single key-value', () => {
    const qs = 'name=Douglas';

    expect(parse(qs)).toEqual({
      name: 'Douglas',
    });
  });

  it('should convert a query string to an object taking care of comma separated values', () => {
    const qs = 'name=Douglas&abilities=JS,TDD';

    expect(parse(qs)).toEqual({
      name: 'Douglas',
      abilities: ['JS', 'TDD'],
    });
  });
});
