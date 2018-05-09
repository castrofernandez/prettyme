module.exports = colors => {
  return {
    '.prettyme.markdown': {
      '.header': {
        '.a': {
          color: colors.primary
        }
      },

      '.bold': {
        'font-weight': '700',
        color: colors.color
      },

      '.italic': {
        'font-style': 'italic',
        color: colors.secondary
      },

      '.list': {
        '&.ul-list &.ol-list': {
          i: {
            color: colors.tertiary
          }
        }
      },

      '.link': {
        i: {
          color: colors.function,

          '&.b': {
            color: colors.text
          },

          '&.p': {
            color: colors.color
          }
        },

        '.u': {
          color: colors.primary
        }
      },

      '.code-inline': {
        color: colors.function
      },

      '.code': {
        color: colors.number,

        i: {
          color: colors.text
        }
      },

      '.quote': {
        i: {
          color: colors.number
        }
      }
    }
  };
};
