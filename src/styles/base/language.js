module.exports = colors => {
  return {
    '.prettyme': {
      color: colors.secondary,

      '.comment': {
        color: colors.comment
      },

      '.name': {
        color: colors.name
      },

      '.delimiter': {
        color: colors.delimiter
      },

      '.string': {
        color: colors.text
      },

      '.number': {
        color: colors.number
      },

      '.object': {
        color: colors.object
      },

      '.reserved': {
        color: colors.reserved
      },

      '.function.name:not(.reserved)': {
        color: colors['function']
      },

      '.null': {
        color: colors.null
      },

      '.boolean': {
        color: colors.boolean
      }
    }
  };
};
