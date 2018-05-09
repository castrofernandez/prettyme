const styles = {};

for (let i = 0; i < 10; i++) {
  styles[`.tab.tab${i}x`] = {
    'padding-left': `${40 * i}px`
  };
}

module.exports = colors => {
  return {
    '.prettyme.json': Object.assign(styles, {
      '.property.string': {
        color: colors.name
      },

      '.number': {
        color: colors.number
      },

      '.string': {
        color: colors.text
      },

      '.null': {
        color: colors.null
      },

      '.true, .false': {
        color: colors.boolean
      }
    })
  };
};
