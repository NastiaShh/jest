const positiveSum = require('./01-SumOfPositive/index');
const removeChar = require('./04-RemoveFirstAndLastCharacter/index');
const countLanguages = require('./05-PrepareTheCountOfLanguages/index');

describe('all tasks tests', () => {
  let num, str, list;

  beforeAll(() => {
    num = 0;
    str = '';
    list = [
      { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
      { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
      { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
      { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
    ];
  });

  // -------------------------------------------------------------

  describe('sum of all of the positives numbers in array', () => {
    describe('basic tests', () => {
      test('return a number', () => {
        expect(typeof positiveSum(num) === 'number').toBeTruthy();
      });
      test('return a defined value', () => {
        expect(positiveSum(num)).toBeDefined();
      });
    });
    describe('fixed tests', () => {
      test('positives nums', () => {
        expect(positiveSum([1, 3, 6])).toBe(10);
      });
      test('zero', () => {
        expect(positiveSum([0, 3])).toBe(3);
        expect(positiveSum([0, 0])).toBe(0);
      });
      test('negative nums', () => {
        expect(positiveSum([-6, 3, -8])).toBe(3);
        expect(positiveSum([-7, -2, null, undefined])).toBe(0);
      });
      test('NaN', () => {
        expect(positiveSum([null, undefined, 'jhf'])).toBe(0);
      });
      test('empty array', () => {
        expect(positiveSum([])).toBe(0);
      });
    });
  });

  // -------------------------------------------------------------

  describe('remove first and last character', () => {
    describe('basic tests', () => {
      test('return a string', () => {
        expect(typeof removeChar(str) === 'string').toBeTruthy();
      });
      test('return a defined value', () => {
        expect(removeChar(str)).toBeDefined();
      });
    });
    describe('fixed tests', () => {
      beforeEach(() => {
        str = 'elbrus';
      });

      test('correct value', () => {
        expect(removeChar(str)).toBe('lbru');
        expect(removeChar('country')).toBe('ountr');
        expect(removeChar('person')).toBe('erso');
        expect(removeChar(' place')).toBe('plac');
      });
      test('two words in the string', () => {
        str += ' bootcamp';
        expect(removeChar(str)).toBe('lbrus bootcam');
      });
      test('two letters string', () => {
        expect(removeChar('hi')).toBe('');
        expect(removeChar('ok')).not.toBe('ok');
      });
      test('empty string', () => {
        expect(removeChar('')).toBe('');
      });
    });
  });
  
  // -------------------------------------------------------------
  
  describe('count languages', () => {
    describe('basic tests', () => {
      test('return an object', () => {
        expect(typeof countLanguages(list) === 'object').toBeTruthy();
      });
      test('return a defined value', () => {
        expect(countLanguages(list)).toBeDefined();
      });
    });
    describe('fixed tests', () => {
      test('correct value', () => {
        expect(countLanguages(list)).toEqual({C: 2, JavaScript: 1, Ruby: 1});
      });
      test('empty array', () => {
        expect(countLanguages([])).toEqual({});
      });
      test('nums are present in the C & JS propertys in the object', () => {
        expect(countLanguages(list)).toEqual(expect.objectContaining({
          C: expect.any(Number), JavaScript: expect.any(Number)
        }))
      });
    });
  });
});
