class EditorOption extends React.Component{
  constructor(props) {
    super(props);
    this.download = this.download.bind(this);
  }

  copy(){
    console.log("copyed");
    var content = document.createElement("textarea");
    content.value = editor.getValue();

    document.body.appendChild(content);
    content.select();
    document.execCommand("copy");
    document.body.removeChild(content);
  }

  download(){
    var filename = this.props.donwloadName + '.' + langExtensionMap[programLang];
    var content = 'data:text/plain;charset=utf-8,' + encodeURIComponent(editor.getValue());
    var element = document.createElement('a');
    element.setAttribute('href', content);
    element.setAttribute('download', filename);

    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  render(){
    return (
      <div>
        <i class="far fa-copy" onClick={this.copy}></i><br/>
        <i class="fas fa-file-download" onClick={this.download}></i>
      </div>
    );
  }
}