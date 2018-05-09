module.exports = settings => {
  const output = {};

  output[`.prettyme.theme-${settings.name}`] = {
    'background-color': settings.colors.background,
    color: settings.colors['default-dark'],
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
          color: settings.colors['line-number'],
          'min-width': '40px'
        }
      }
    }
  };

  return output;
};
