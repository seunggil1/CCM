var myLayout = new GoldenLayout( layoutConfig );

myLayout.registerComponent( 'problem', function( container, state ){
  container.getElement().html( '<h2>' + state.text + '</h2>');
});
myLayout.registerComponent( 'editor',function(container,state){
  container.getElement().html( '<div id="editor1" style="height: 100%; width:100%;"></div>');
});
myLayout.registerComponent( 'Examples', Examples);

myLayout.on('tabCreated', function( tab ){
  tab.element.attr('title', tab.contentItem.config.tooltip);
});
myLayout.on('initialised', function( tab ){
  createEditor(['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'));
  document.getElementById("editor1").parentElement.style.overflow = "unset";
});
myLayout.on('stateChanged',function(some){
  var editorValue = editor1.getValue();
  document.getElementById("editor1").innerHTML = '';
  createEditor( editorValue );
});

myLayout.init();