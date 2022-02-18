module.exports = {
  "rules": {
    "react/default-props-match-prop-types": [
      "error",
      {
        "allowRequiredDefaults": false
      }
    ],
    "react/forbid-component-props": "off",
    "react/forbid-dom-props": "off",
    "react/forbid-elements": "off",
    "react/forbid-prop-types": [
      "error",
      {
        "forbid": [
          "any"
        ]
      }
    ],
    "react/forbid-foreign-prop-types": "error",
    "react/no-access-state-in-setstate": "error",
    "react/no-array-index-key": "warn",
    "react/no-children-prop": "error",
    "react/no-danger": "error",
    "react/no-danger-with-children": "error",
    "react/no-deprecated": "warn",
    "react/no-did-mount-set-state": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-find-dom-node": "error",
    "react/no-is-mounted": "error",
    "react/no-multi-comp": [
      "error",
      {
        "ignoreStateless": true
      }
    ],
    "react/no-redundant-should-component-update": "error",
    "react/no-render-return-value": "error",
    "react/no-set-state": "off",
    "react/no-typos": "error",
    "react/no-string-refs": "error",
    "react/no-this-in-sfc": "error",
    "react/no-unescaped-entities": "error",
    "react/no-unknown-property": "error",
    "react/no-unused-prop-types": "error",
    "react/no-unused-state": "error",
    "react/no-will-update-set-state": "error",
    "react/prefer-es6-class": ["error", "always"],
    "react/prefer-stateless-function": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/require-render-return": "error",
    "react/self-closing-comp": [
      "error",
      {
        "component": true,
        "html": true
      }
    ],
    "react/sort-comp": [
      "error",
      {
        "order": [
          "static-methods",
          "instance-variables",
          "getters",
          "setters",
          "lifecycle",
          "everything-else",
          "rendering"
        ],
        "groups": {
          "rendering": ["render", "/^render.+$/"]
        }
      }
    ],
    "react/sort-prop-types": [
      "off",
      {
        "callbacksLast": true,
        "ignoreCase": false,
        "requiredFirst": true,
        "sortShapeProp": true
      }
    ],
    "react/style-prop-object": "error",
    "react/void-dom-elements-no-children": "error",
    "react/jsx-boolean-value": ["error", "always"],
    "react/jsx-closing-bracket-location": [
      "error",
      {
        "nonEmpty": "after-props",
        "selfClosing": "after-props"
      }
    ],
    "react/jsx-closing-tag-location": "error",
    "react/jsx-curly-spacing": [
      "error",
      "never",
      {
        "allowMultiline": true,
        "spacing": {
          "objectLiterals": "never",
          "children": "never",
          "attributes": "never"
        }
      }
    ],
    "react/jsx-equals-spacing": ["error", "never"],
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".jsx", ".tsx"]
      }
    ],
    "react/jsx-first-prop-new-line": ["error", "never"],
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": "off",
    "react/jsx-key": "error",
    "react/jsx-max-props-per-line": [
      "error",
      {
        "maximum": 1,
        "when": "always"
      }
    ],
    "react/jsx-no-bind": [
      "error",
      {
        "ignoreRefs": false,
        "allowArrowFunctions": false,
        "allowFunctions": false,
        "allowBind": false
      }
    ],
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-literals": "error",
    "react/jsx-no-target-blank": "error",
    "react/jsx-no-undef": [
      "error",
      {
        "allowGlobals": false
      }
    ],
    "react/jsx-one-expression-per-line": "error",
    "react/jsx-curly-brace-presence": [
      "error",
      {
        "props": "always",
        "children": "always"
      }
    ],
    "react/jsx-sort-props": [
      "error",
      {
        "noSortAlphabetically": true,
        "reservedFirst": true
      }
    ],
    "react/jsx-tag-spacing": [
      "error",
      {
        "closingSlash": "never",
        "beforeSelfClosing": "never",
        "afterOpening": "never",
        "beforeClosing": "never"
      }
    ],
    "react/jsx-pascal-case": [
      "error",
      {
        "allowAllCaps": false,
        "ignore": []
      }
    ],
    "react/jsx-sort-default-props": "off",
    "react/jsx-uses-react": "off",
    "react/jsx-uses-vars": "error",
    "react/jsx-wrap-multilines": [
      "error",
      {
        "declaration": "parens-new-line",
        "assignment": "parens-new-line",
        "return": "parens-new-line",
        "arrow": "parens-new-line",
        "condition": "ignore",
        "logical": "ignore",
        "prop": "parens-new-line"
      }
    ],
    // eslint-plugin-react-hooks related rules
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  }
};
