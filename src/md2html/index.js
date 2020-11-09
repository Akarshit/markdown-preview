import lineEndingsTransformer from './transformers/line-endings';
import stripTransformer from './transformers/strip';
import escapeTransformer from './transformers/escape-html';

import linkParser from './parsers/links';
import headersParser from './parsers/headers';
import paraParser from './parsers/paras';

const md2html = {};

/**
 * Converts the markdown string to HTML
 *
 * @param {string} markdown
 */
md2html.convert = (markdown) => {
  let current = markdown;

  // change line endings to \n
  current = lineEndingsTransformer(current);

  // strip extra newlines
  current = stripTransformer(current);

  // excape html tags and things like ", &
  current = escapeTransformer(current);

  // parse inline links
  current = linkParser(current);

  // parse h1-h6 headings
  current = headersParser(current);

  // parse the paragraphs
  current = paraParser(current);

  return current;
};

/**
 * A faster methood to convert the markdown into HTML
 * It relies on the fact that the whole markdown
 * would be supplied as the parameter
 *
 * If this input would have been from a file, we could parse
 * line by line, and keep procssing in parallel
 * @param {string} markdown
 */
md2html.convertFast = (markdown) => {
  // Markdown(for our use-case) is independent
  // after split on \n\n

  const chunks = markdown.split(/\n\n/);
  const htmls = chunks.map((c) => md2html.convert(c));
  return htmls.join('');
};

export default md2html;
