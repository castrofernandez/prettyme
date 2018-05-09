const LanguageCSS = require('../base/language');

const styles = colors => {
  return {
    '.prettyme.javascript': {
      '.regex': {
        color: colors.regex
      },

      '.string-template': {
        '&:not(.string-template-parameter)': {
          color: colors.text
        }
      }
    }
  };
};

module.exports = colors => Object.assign(LanguageCSS(colors), styles(colors));
