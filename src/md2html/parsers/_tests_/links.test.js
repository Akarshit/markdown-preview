import linkParser from '../links';

test('returns same when no links', () => {
  const markdown = 'This has no [links]';
  const expected = 'This has no [links]';
  expect(linkParser(markdown)).toEqual(expected);
});

test('inserts <a> with links', () => {
  const markdown = 'Have you searched this on [Google](https://google.com)';
  const expected =
    'Have you searched this on <a href="https://google.com">Google</a>';
  expect(linkParser(markdown)).toEqual(expected);
});

test('inserts <a> with relative links', () => {
  const markdown = 'Get help [here](help)';
  const expected = 'Get help <a href="help">here</a>';
  expect(linkParser(markdown)).toEqual(expected);
});

test('inserts <a> inside headings', () => {
  const markdown = '# [Google](https://google.com)';
  const expected = '# <a href="https://google.com">Google</a>';
  expect(linkParser(markdown)).toEqual(expected);
});

test('invalid address', () => {
  const markdown = '# [Google](not google)';
  const expected = '# [Google](not google)';
  expect(linkParser(markdown)).toEqual(expected);
});

test('nested links', () => {
  const markdown = '[Google](not google [Yahoo!](not yahoo [Help](help)))';
  const expected =
    '[Google](not google [Yahoo!](not yahoo <a href="help">Help</a>))';
  expect(linkParser(markdown)).toEqual(expected);
});
