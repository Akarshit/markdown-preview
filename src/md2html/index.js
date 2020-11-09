import stripTransformer from './transformers/strip';

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

  // strip extra newlines
  current = stripTransformer(current);

  // parse inline links
  current = linkParser(current);

  // parse h1-h6 headings
  current = headersParser(current);

  // parse the paragraphs
  current = paraParser(current);

  return current;
};

export default md2html;
