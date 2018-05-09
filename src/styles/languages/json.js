const styles = {};

for (let i = 0; i < 10; i++) {
  styles[`.tab.tab${i}x`] = {
    'padding-left': `${40 * i}px`
  };
}

module.exports = settings => {
  return {
    '.prettyme.json': Object.assign(styles, {
      '.property.string': {
        color: settings.colors.name
      },

      '.number': {
        color: settings.colors.number
      },

      '.string': {
        color: settings.colors.text
      },

      '.null': {
        color: settings.colors.null
      },

      '.true, .false': {
        color: settings.colors.boolean
      }
    })
  };
};
