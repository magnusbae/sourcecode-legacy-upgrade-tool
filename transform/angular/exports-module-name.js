function transformer(file, api) {
  const j = api.jscodeshift;
  const {expression, statement, statements} = j.template;

  const root = j(file.source);

  // let varname = root
  //   .find(j.Identifier, id => id.name === 'angular')
  //   .filter(angular => angular.parent.getValueProperty('property').name === 'module')
  //   .get().parent.parent.getValueProperty('arguments')[0].value;


  /*
  *
   def("VariableDeclaration")
   .bases("Declaration")
   .build("kind", "declarations")
   .field("kind", or("var", "let", "const"))
   .field("declarations", [def("VariableDeclarator")]);

   def("VariableDeclarator")
   .bases("Node")
   .build("id", "init")
   .field("id", def("Pattern"))
   .field("init", or(def("Expression"), null));
  * */

  return(j.variableDeclaration([
    'var',
    [j.variableDeclarator([
      'foo',
      j.literal('bar')
    ])]
  ])).toSource();


  // return j(file.source)
  //     .toSource()
  //   + "module.exports = " + varname + ";";
}

module.exports = transformer;
