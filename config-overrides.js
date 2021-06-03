const { alias, aliasJest } = require('react-app-rewire-alias');
const path = require('path');

const aliasMap = {
  assets: path.join(__dirname, 'src', 'assets'),
  components: path.join(__dirname, 'src', 'components'),
  sections: path.join(__dirname, 'src', 'sections'),
  reusecore: path.join(__dirname, 'src', 'reusecore')
};

module.exports = alias(aliasMap);
module.exports.jest = aliasJest(aliasMap);
