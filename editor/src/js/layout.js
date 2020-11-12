var myLayout = new GoldenLayout( layoutConfig );

myLayout.registerComponent( 'problem', function( container, state ){
  container.getElement().html( '<h2>' + state.text + '</h2>');
});
myLayout.registerComponent( 'editor',function(container,state){
  container.getElement().html( '<div id="editor" style="height: 100%; width:100%;"></div>');
});
myLayout.registerComponent( 'Examples', Examples);

myLayout.on('tabCreated', function( tab ){
  tab.element.attr('title', tab.contentItem.config.tooltip);
});
myLayout.on('initialised', function( tab ){
  // createEditor(['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'));
  createEditor(['#include <stdio.h>','int main(){','\tint a,b;','\tscanf("%d",&a);','\tscanf("%d",&b);','\tprintf("%d",a+b);','\treturn 0;','}'].join('\n'));
  document.getElementById("editor").parentElement.style.overflow = "unset";
});
myLayout.on('stateChanged',function(some){
  var editorValue = editor.getValue();
  document.getElementById("editor").innerHTML = '';
  createEditor( editorValue );
});

myLayout.init();