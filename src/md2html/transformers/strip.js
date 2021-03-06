/**
 * Removes lines which only have spaces or tabs
 * as they have no meaning in markdown
 *
 * @param {string} markdown
 */
const transformer = (markdown) => {
  let html = markdown.replace(/^[ \t]+$/gm, '');
  return html;
};

export default transformer;
