import paraParser from '../paras';

test('parses single line as p', () => {
  const markdown = 'Some text';
  const expected = '<p>Some text</p>';
  expect(paraParser(markdown)).toEqual(expected);
});

test('parses multiple line as p with br', () => {
  const markdown = `Some text
Next line`;
  const expected = '<p>Some text<br>Next line</p>';
  expect(paraParser(markdown)).toEqual(expected);
});

test('skips headings', () => {
  const markdown = '<h1>My heading</h1>';
  const expected = '<h1>My heading</h1>';
  expect(paraParser(markdown)).toEqual(expected);
});

test('empty para return empty', () => {
  const markdown = '';
  const expected = '';
  expect(paraParser(markdown)).toEqual(expected);
});

test('Multiple para in separate p', () => {
  const markdown = `Some text
Next line

Next para`;
  const expected = '<p>Some text<br>Next line</p><p>Next para</p>';
  expect(paraParser(markdown)).toEqual(expected);
});

test('handle spaces gracefully', () => {
  const markdown = 'Start    end';
  const expected = '<p>Start    end</p>';
  expect(paraParser(markdown)).toEqual(expected);
});
