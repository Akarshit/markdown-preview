import escape from 'escape-html';

/**
 * Escapes the html, things like ", ', &, < get escaped
 *
 * @param {string} markdown
 */
const parser = (markdown) => {
  return escape(markdown);
};

export default parser;
