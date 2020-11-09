/**
 * Converts all line ending to UNIX endings.
 * Useful when parsing markdown from a file
 *
 * @param {string} markdown
 */
const parser = (markdown) => {
  const html = markdown.replace(/\r?\n|\r/g, '\n');
  return html;
};

export default parser;
