const replacer = (match, before, text, link, offset, string) => {
  if (link.indexOf(' ') === -1) {
    return `${before}<a href="${link}">${text}</a>`;
  }
  return match;
};

/**
 * Replaces markdown links with HTML <a>
 * The link should be of format [Preview](address)
 *
 * @param {string} markdown
 */
const parser = (markdown) => {
  const html = markdown.replace(/(.*)\[(.*?)\]\((.*?)\)/g, replacer);
  return html;
};

export default parser;
