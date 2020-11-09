import lineParser from '../lines';

test('no breaks in single line', () => {
  const markdown = 'Hi! This is the first test';
  const expected = 'Hi! This is the first test';
  expect(lineParser(markdown)).toEqual(expected);
});

test('no breaks in single line', () => {
  const markdown = `Hi! This is the first test
Now this is the second line`;
  const expected = 'Hi! This is the first test<br>Now this is the second line';
  expect(lineParser(markdown)).toEqual(expected);
});
