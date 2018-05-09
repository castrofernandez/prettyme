module.exports = colors => {
  return {
    '.prettyme.html': {
      color: colors['default-dark'],

      '.comment': {
        color: colors.comment,
        'font-style': 'italic'
      },

      '&.delimiter, &.comment': {
        color: colors.delimiter
      },

      '.in-angle': {
        '&.tag': {
          color: colors.tag
        },

        '&.attribute': {
          color: colors.name
        },

        '&.value': {
          color: colors.tertiary
        }
      }
    }
  };
};
