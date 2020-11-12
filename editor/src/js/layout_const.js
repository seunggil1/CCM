const editorComponent = {
  type:'component',
  componentName: 'editor',
  title: 'editor',
  tooltip: '여기서 코드를 작성하세요',
  isClosable: false,
};
const problemComponent = {
  type:'react-component',
  title: 'problem',
  tooltip: '문제를 여기서 확인하세요',
  isClosable: false,
  component: "Problem",
  props : {
    title : "더하기",
    problem : "C 언어를 활용하여 두 수 a 와 b를 입력받아 더한 결과를 출력하는 코드를 작성하시오",
    input : "두 수 a와 b가 공백을 기준으로 주어진다.",
    output : "두 수를 더한 결과를 출력하여라",
    condition : [
      "-10 <= a <= 100",
      "-30 < b <= 25"
    ]
  }
};
const exampleComponent = {
  type:'react-component',
  title: 'example',
  tooltip: '여기서 실행해보세요',
  isClosable: false,
  component: 'Examples',
  props : {
    list : [
      {
        index :"1" ,
        img :"https://miro.medium.com/max/12032/1*1X0-98EiQNkwBJj2vnTTqQ.jpeg" ,
        input :"2\n4" ,
        output :"6",
      },
      {
        index :"2" ,
        input :"4 5" ,
        output :"8",
      },
      {
        index :"3" ,
        input :"1 392" ,
        output :"123",
      }
    ],
  },
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
    content: [editorComponent, problemComponent, exampleComponent]
  }]
};