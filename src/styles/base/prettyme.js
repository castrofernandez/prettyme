module.exports = colors => {
  return {
    '.prettyme': {
      color: colors['default-dark'],
      position: 'relative',

      '.token-wrapper': {
        display: 'inline-block',

        i: {
          'font-style': 'normal'
        }
      },

      '&.numbered': {
        'counter-reset': 'lines',

        '.line': {
          position: 'relative',

          '&::before': {
            'counter-increment': 'lines',
            content: 'counter(lines)',
            position: 'absolute',
            left: '-80px',
            'text-align': 'right',
            color: colors.default,
            'min-width': '40px'
          }
        }
      },

      '&.theme-dark': {
        'background-color': '#444',
        color: colors.default,

        '&.numbered': {
          '.line::before': {
            color: colors.default
          }
        }
      }
    }
  };
};
