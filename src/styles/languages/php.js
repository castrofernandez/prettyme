const LanguageCSS = require('../base/language');

const styles = colors => {
  return {
    '.prettyme.php': {
      '.tag': {
        color: colors.tag
      }
    }
  };
};

module.exports = colors => Object.assign(LanguageCSS(colors), styles(colors));
