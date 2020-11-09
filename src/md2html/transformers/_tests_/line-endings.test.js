import lineEndingsTransformer from '../line-endings';

test('parses h1 heading', () => {
  const markdown = 'text\r\n';
  const expected = 'text\n';
  expect(lineEndingsTransformer(markdown)).toEqual(expected);
});

test('parses h1 heading', () => {
  const markdown = 'text\r';
  const expected = 'text\n';
  expect(lineEndingsTransformer(markdown)).toEqual(expected);
});
