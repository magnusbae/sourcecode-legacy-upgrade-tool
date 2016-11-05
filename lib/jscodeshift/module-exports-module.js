export default function transformer(file, api) {
  const j = api.jscodeshift;
  const {expression, statement, statements} = j.template;

  let varname = j(file.source)
      .find(j.Identifier, id => id.name === 'angular')
  .filter(angular => angular.parent.getValueProperty('property').name === 'module')
  .get().parent.parent.parent.parent.parent.getValueProperty('id').name;

  return j(file.source)
      .toSource()
    + "module.exports = " + varname + ";";
};