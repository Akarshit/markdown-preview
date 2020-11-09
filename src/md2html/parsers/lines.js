const replacer = () => {
  return `<br>`;
};

/**
 * Replaces newlines with <br>
 * @param {string} markdown
 */
const parser = (markdown) => {
  const html = markdown.replace(/\n/gm, replacer);
  return html;
};

export default parser;
