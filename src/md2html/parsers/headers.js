const replacer = (match, hashtags, heading) => {
  const headingNumber = hashtags.length;
  return `\n<h${headingNumber}>${heading}</h${headingNumber}>\n`;
};

/**
 * Replaces #XXX headings with <hX> tags
 * @param {string} markdown
 */
const parser = (markdown) => {
  const html = markdown.replace(/^(#{1,6}) (.*)$/gm, replacer);
  return html;
};

export default parser;
