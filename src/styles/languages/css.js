module.exports = colors => {
  return {
    '.prettyme.css': {
      color: colors.primary,

      '.comment': {
        color: colors.default
      },

      ':not(.comment)': {
        '&.property, &.word.in-bracket:not(.value)': {
          color: colors.secondary
        },

        '&.value, &.in-value, &.word.in-value:not(.property)': {
          color: colors.tertiary
        },

        '&.color': {
          color: colors.color
        },

        '&.function': {
          color: colors.function
        },

        '&.number, &.unit': {
          color: colors.number
        },

        '&.text': {
          color: colors.text
        },

        '&.delimiter': {
          color: colors.delimiter
        },

        '&.selector': {
          color: colors.tag
        }
      }
    }
  };
};
