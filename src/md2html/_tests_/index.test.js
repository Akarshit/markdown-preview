import md2html from '../index';

test('parses only in-line text', () => {
  const markdown = `Hello world!`;
  const expected = `<p>Hello world!</p>`;
  expect(md2html.convert(markdown)).toEqual(expected);
});

test('parses text with new lines', () => {
  const markdown = `Hello
world!`;
  const expected = `<p>Hello<br>world!</p>`;
  expect(md2html.convert(markdown)).toEqual(expected);
});

test('parses single heading', () => {
  const markdown = `# Heading 1`;
  const expected = `<h1>Heading 1</h1>`;
  expect(md2html.convert(markdown)).toEqual(expected);
});

test('parses multiple headings', () => {
  const markdown = `# Heading 1\n### Heading 3`;
  const expected = `<h1>Heading 1</h1><h3>Heading 3</h3>`;
  expect(md2html.convert(markdown)).toEqual(expected);
});

test('parses only in-line link', () => {
  const markdown = `[Mailchimp](https://www.mailchimp.com)`;
  const expected = `<p><a href="https://www.mailchimp.com">Mailchimp</a></p>`;
  expect(md2html.convert(markdown)).toEqual(expected);
});

test('parses in-line link', () => {
  const markdown = `Nice work [Mailchimp](https://www.mailchimp.com)`;
  const expected = `<p>Nice work <a href="https://www.mailchimp.com">Mailchimp</a></p>`;
  expect(md2html.convert(markdown)).toEqual(expected);
});

test('parses paragraphs links and headers - 1', () => {
  const markdown = `# Sample Document

Hello!

This is sample markdown for the [Mailchimp](https://www.mailchimp.com) homework assignment.`;
  const expected = `<h1>Sample Document</h1>
<p>Hello!</p>
<p>This is sample markdown for the <a href="https://www.mailchimp.com">Mailchimp</a> homework assignment.</p>`;
  const html = md2html.convert(markdown);
  expect(html).toEqual(expected.replace(/\n/gm, ''));
});

test('parses paragraphs links and headers - 2', () => {
  const markdown = `# Header one

Hello there

How are you?
What's going on?

## Another Header

This is a paragraph [with an inline link](http://google.com). Neat, eh?

## This is a header [with a link](http://yahoo.com)`;
  const expected = `<h1>Header one</h1>

<p>Hello there</p>

<p>How are you?<br>What&#39;s going on?</p>

<h2>Another Header</h2>

<p>This is a paragraph <a href="http://google.com">with an inline link</a>. Neat, eh?</p>

<h2>This is a header <a href="http://yahoo.com">with a link</a></h2>`;
  const html = md2html.convert(markdown);
  expect(html).toEqual(expected.replace(/\n\n/gm, ''));
});

test('parses paragraphs links and headers with fast', async () => {
  const markdown = `# Header one

Hello there

How are you?
What's going on?

## Another Header

This is a paragraph [with an inline link](http://google.com). Neat, eh?

## This is a header [with a link](http://yahoo.com)`;
  const expected = `<h1>Header one</h1>

<p>Hello there</p>

<p>How are you?<br>What&#39;s going on?</p>

<h2>Another Header</h2>

<p>This is a paragraph <a href="http://google.com">with an inline link</a>. Neat, eh?</p>

<h2>This is a header <a href="http://yahoo.com">with a link</a></h2>`;
  const html = await md2html.convertFast(markdown);
  expect(html).toEqual(expected.replace(/\n\n/gm, ''));
});
