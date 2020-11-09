import linesParser from './lines';

const replacer = (match, para) => {
  const slimPara = para.trim();
  if (!slimPara) {
    return '';
  }
  if (slimPara.indexOf('<h') === 0) {
    return slimPara;
  }
  const lines = linesParser(slimPara);
  return `<p>${lines}</p>`;
};

/**
 * Encloses paragraphs within <p>
 * This skips the line if <h1-6> is present, since
 * headings aren't enclosed in <p>
 *
 * @param {string} markdown
 */
const parser = (markdown) => {
  markdown += '\n\n';
  const html = markdown.replace(/([\s\S]*?\n{2,})/gm, replacer);
  return html;
};

export default parser;
