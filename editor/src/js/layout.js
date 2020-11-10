const editorComponent = {
  type:'component',
  componentName: 'editor',
  title: '코드이게 이렇게 길어지면?',
  tooltip: '여기서 코드를 작성하세요',
  isClosable: false,
  // componentState: { text: 'Component 2' }
};
const problemComponent = {
  type:'component',
  componentName: 'example',
  title: '문제',
  tooltip: '문제를 여기서 확인하세요',
  isClosable: false,
  componentState: { list: 'Component 1' }
};
const executionComponent = {
  type:'react-component',
  title: '실행',
  tooltip: '여기서 실행해보세요',
  isClosable: false,
  component: 'LikeButton',
};


const layoutConfig = {
  settings:{
    showPopoutIcon: false,
    showMaximiseIcon: false,
    showCloseIcon: false,
    selectionEnabled: true,
  },
  dimensions: {headerHeight: 34},
  content: [{
    type: 'stack',
    content: [editorComponent, problemComponent, executionComponent]
  }]
};