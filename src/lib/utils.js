class Utils {
  escape(code) {
    const replaced = this.replaceAll(code, '<', '&lt;');
    return this.replaceAll(replaced, '>', '&gt;');
  }

  replaceAll(str, search, replace) {
    return str ? str.split(search).join(replace) : '';
  }

  formatLines(code, lineWrapper = []) {
    const start = lineWrapper.length === 2 ? lineWrapper[0] : '';
    const end = lineWrapper.length === 2 ? lineWrapper[1] : '';
    return [start, code.split('\n').join(`${end}\n${start}`), end].join('');
  }
}

if (typeof module !== 'undefined') {
  module.exports = new Utils();
}
