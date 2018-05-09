module.exports = settings => {
  return {
    '.prettyme.html': {
      color: settings.colors['default-dark'],

      '.comment': {
        color: settings.colors.comment,
        'font-style': 'italic'
      },

      '&.delimiter, &.comment': {
        color: settings.colors.delimiter
      },

      '.in-angle': {
        '&.tag': {
          color: settings.colors.tag
        },

        '&.attribute': {
          color: settings.colors.name
        },

        '&.value': {
          color: settings.colors.tertiary
        }
      }
    }
  };
};
