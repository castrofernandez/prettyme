module.exports = settings => {
  return {
    '.prettyme': {
      color: settings.colors.secondary,

      '.comment': {
        color: settings.colors.comment
      },

      '.name': {
        color: settings.colors.name
      },

      '.delimiter': {
        color: settings.colors.delimiter
      },

      '.string': {
        color: settings.colors.text
      },

      '.number': {
        color: settings.colors.number
      },

      '.object': {
        color: settings.colors.object
      },

      '.reserved': {
        color: settings.colors.reserved
      },

      '.function.name:not(.reserved)': {
        color: settings.colors.function
      },

      '.null': {
        color: settings.colors.null
      },

      '.boolean': {
        color: settings.colors.boolean
      }
    }
  };
};
