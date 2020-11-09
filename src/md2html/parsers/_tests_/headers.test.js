import headerParser from '../headers';

test('parses h1 heading', () => {
  const markdown = '# Heading 1';
  const expected = '\n<h1>Heading 1</h1>\n';
  expect(headerParser(markdown)).toEqual(expected);
});

test('parses h5 heading', () => {
  const markdown = '##### Heading 5';
  const expected = '\n<h5>Heading 5</h5>\n';
  expect(headerParser(markdown)).toEqual(expected);
});

test('looks for exact heading', () => {
  const markdown = '#####Heading 5';
  const expected = '#####Heading 5';
  expect(headerParser(markdown)).toEqual(expected);
});

test('skips on >6 hashes', () => {
  const markdown = '####### Heading 7';
  const expected = '####### Heading 7';
  expect(headerParser(markdown)).toEqual(expected);
});
