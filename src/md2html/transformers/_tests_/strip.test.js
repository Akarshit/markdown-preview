import stripTransformer from '../strip';

test('deleted lines with tabs or spaces', () => {
  const markdown = `           
Line`;
  const expected = '\nLine';
  expect(stripTransformer(markdown)).toEqual(expected);
});
