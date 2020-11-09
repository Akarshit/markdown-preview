import stripTransformer from './transformers/strip';

import linkParser from './parsers/links';

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

  return current;
};

export default md2html;
