var myLayout = new GoldenLayout( layoutConfig );

myLayout.registerComponent( 'Problem', Problem);
myLayout.registerComponent( 'editor',function(container,state){
  container.getElement().html( '<div id="editor" style="height: 100%; width:100%;"></div>');
});
myLayout.registerComponent( 'Examples', Examples);

myLayout.on('tabCreated', function( tab ){
  tab.element.attr('title', tab.contentItem.config.tooltip);
});
myLayout.on('stateChanged',function(some){
  var editorValue = editor.getValue();
  document.getElementById("editor").innerHTML = '';
  createEditor( editorValue );
});
myLayout.on('stackCreated', function( stack ){
  createEditor(['#include <stdio.h>','int main(){','\tint a,b;','\tscanf("%d",&a);','\tscanf("%d",&b);','\tprintf("%d",a+b);','\treturn 0;','}'].join('\n'));
  document.getElementById("editor").parentElement.style.overflow = "unset";
})

myLayout.init();