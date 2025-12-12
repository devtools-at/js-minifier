/**
 * JavaScript Minifier
 * Minify JavaScript code
 *
 * Online tool: https://devtools.at/tools/js-minifier
 *
 * @packageDocumentation
 */

function minifyJavaScript(code: string): string {
  let minified = code;

  // Remove single-line comments (// ...) but preserve URLs
  minified = minified.replace(/([^:]|^)\/\/.*$/gm, '$1');

  // Remove multi-line comments (/* ... */)
  minified = minified.replace(/\/\*[\s\S]*?\*\//g, '');

  // Remove leading/trailing whitespace from each line
  minified = minified.replace(/^\s+|\s+$/gm, '');

  // Replace multiple spaces with single space
  minified = minified.replace(/\s{2,}/g, ' ');

  // Remove spaces around operators and punctuation
  minified = minified.replace(/\s*([{}()\[\];,:<>?&|=+\-*/%!])\s*/g, '$1');

  // Remove newlines and extra spaces
  minified = minified.replace(/\n/g, '');

  return minified.trim();
}

function beautifyJavaScript(code: string, indentSize: number): string {
  let beautified = '';
  let indentLevel = 0;
  const indent = ' '.repeat(indentSize);

  // First, remove existing formatting
  const cleaned = code.replace(/\s+/g, ' ').trim();

  for (let i = 0; i < cleaned.length; i++) {
    const char = cleaned[i];
    const nextChar = cleaned[i + 1];
    const prevChar = cleaned[i - 1];

    if (char === '{') {
      beautified += ' {\n';
      indentLevel++;
      beautified += indent.repeat(indentLevel);
    } else if (char === '}') {
      beautified = beautified.trimEnd();
      if (beautified.endsWith('\n')) {
        indentLevel--;
        beautified += indent.repeat(indentLevel);
      } else {
        beautified += '\n';
        indentLevel--;
        beautified += indent.repeat(indentLevel);
      }
      beautified += '}';
      if (nextChar && nextChar !== ';' && nextChar !== ',' && nextChar !== ')' && nextChar !== '}') {
        beautified += '\n' + indent.repeat(indentLevel);
      }
    } else if (char === ';') {
      beautified += ';\n' + indent.repeat(indentLevel);
    } else if (char === ',') {
      beautified += ', ';
    } else if (char === '(' || char === '[') {
      if (prevChar && /\w/.test(prevChar)) {
        beautified += char;
      } else {
        beautified += char;
      }
    } else if (char === ')' || char === ']') {
      beautified += char;
    } else if (char === ' ') {
      // Only add space if it's not after special chars
      if (prevChar && !/[{(,]/.test(prevChar) && nextChar && !/[}),;]/.test(nextChar)) {
        beautified += char;
      }
    } else {
      beautified += char;
    }
  }

function calculateCompressionRatio(original: string, minified: string): number {
  if (original.length === 0) return 0;
  return ((original.length - minified.length) / original.length) * 100;
}

// Export for convenience
export default { encode, decode };
