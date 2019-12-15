const path = require("path");

module.exports = {
  "extends": [
    "wesbos"
  ],
  "rules": {
    "react-hooks/exhaustive-deps": "off",
    "graphql/template-strings": [
      "error",
      {
        "env": "relay",
        "schemaJsonFilepath": path.resolve(__dirname,
        "./src/schema.graphql"),
        tagName: "graphql"
      }
    ]
  },
  plugins: [
    "graphql"
  ]
};