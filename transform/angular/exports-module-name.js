function transformer(file, api) {
  const j = api.jscodeshift;
  const {expression, statement, statements} = j.template;


  let varname = j(file.source)
    .find(j.Identifier, id => id.name === 'angular')
    .filter(angular => angular.parent.getValueProperty('property').name === 'module')
    .get().parent.parent.getValueProperty('arguments')[0].value;
  return j(file.source)
      .toSource()
    + "module.exports = " + varname + ";";
}

module.exports = transformer;
