const LanguageCSS = require('../base/language');

const styles = settings => {
  return {
    '.prettyme.javascript': {
      '.regex': {
        color: settings.colors.regex
      },

      '.string-template': {
        '&:not(.string-template-parameter)': {
          color: settings.colors.text
        }
      }
    }
  };
};

module.exports = settings => Object.assign(LanguageCSS(settings), styles(settings));
