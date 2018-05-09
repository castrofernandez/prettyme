const LanguageCSS = require('../base/language');

const styles = settings => {
  return {
    '.prettyme.php': {
      '.tag': {
        color: settings.colors.tag
      }
    }
  };
};

module.exports = settings => Object.assign(LanguageCSS(settings), styles(settings));
