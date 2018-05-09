module.exports = settings => {
  return {
    '.prettyme.markdown': {
      '.header': {
        '.a': {
          color: settings.colors.primary
        }
      },

      '.bold': {
        'font-weight': '700',
        color: settings.colors.color
      },

      '.italic': {
        'font-style': 'italic',
        color: settings.colors.secondary
      },

      '.list': {
        '&.ul-list, &.ol-list': {
          i: {
            color: settings.colors.tertiary
          }
        }
      },

      '.link': {
        i: {
          color: settings.colors.function,

          '&.b': {
            color: settings.colors.text
          },

          '&.p': {
            color: settings.colors.color
          }
        },

        '.u': {
          color: settings.colors.primary
        }
      },

      '.code-inline': {
        color: settings.colors.function
      },

      '.code': {
        color: settings.colors.number,

        i: {
          color: settings.colors.text
        }
      },

      '.quote': {
        i: {
          color: settings.colors.number
        }
      }
    }
  };
};
