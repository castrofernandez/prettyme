module.exports = settings => {
  return {
    '.prettyme.css': {
      color: settings.colors.primary,

      '.comment': {
        color: settings.colors.default
      },

      ':not(.comment)': {
        '&.property, &.word.in-bracket:not(.value)': {
          color: settings.colors.secondary
        },

        '&.value, &.in-value, &.word.in-value:not(.property)': {
          color: settings.colors.tertiary
        },

        '&.color': {
          color: settings.colors.color
        },

        '&.function': {
          color: settings.colors.function
        },

        '&.number, &.unit': {
          color: settings.colors.number
        },

        '&.text': {
          color: settings.colors.text
        },

        '&.delimiter': {
          color: settings.colors.delimiter
        },

        '&.selector': {
          color: settings.colors.tag
        }
      }
    }
  };
};
