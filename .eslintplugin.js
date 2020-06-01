module.exports.rules = {
  'jsx-uses-vars': {
    create(context) {
      return {
        JSXOpeningElement(node) {
          if (node.name.name) {
            const variable = node.name.name;
            context.markVariableAsUsed(variable);
          }
        },
      };
    },
  },
};
