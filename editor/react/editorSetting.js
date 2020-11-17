class EditorSetting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size : "20",
      font : "Consolas",
      display : "none"
    };

    this.fontChange = this.fontChange.bind(this);
    this.sizeChange = this.sizeChange.bind(this);
    this.cancel = this.cancel.bind(this);
    this.apply = this.apply.bind(this);
  }

  fontChange(event){
    this.setState({font: event.target.value});
  }
  sizeChange(event){
    this.setState({size: event.target.value});
  }
  cancel(){
    document.getElementById("editorSetting").style.display = "none";
    document.getElementById("editorSettingBox").style.display = "none";
  }
  apply(){
    document.getElementById("editor").innerHTML = '';
    var editorValue = editor.getValue();
    createEditor(editorValue,this.state.size,this.state.font);

    document.getElementById("editorSetting").style.display = "none";
    document.getElementById("editorSettingBox").style.display = "none";
  }

  render(){
    var style = `font-size: ${this.state.size}px; font-family: ${this.state.font};`;

    return (
    <div id="editorSetting" class="setting" style={{display : this.state.display}}>
      <div class="settingUnit">
        <span>Font</span>
        <div>
          <select value={this.state.font} onChange={this.fontChange}>
            <option value="Consolas" style={{fontFamily: "Consolas"}}>Consolas</option>
            <option value="D2Coding" style={{fontFamily: "D2Coding"}}>D2Coding</option>
            <option value="IBM Plex Mono" style={{fontFamily: "IBM Plex Mono"}}>IBM Plex Mono</option>
          </select>
        </div>
      </div>
      <div class="settingUnit">
        <span>Size</span>
        <div>
          <select value={this.state.size} onChange={this.sizeChange}>
            <option value="15" style={{fontSize: "15px"}}>15</option>
            <option value="17" style={{fontSize: "17px"}}>17</option>
            <option value="20" style={{fontSize: "20px"}}>20</option>
            <option value="25" style={{fontSize: "25px"}}>25</option>
            <option value="30" style={{fontSize: "30px"}}>30</option>
            <option value="35" style={{fontSize: "35px"}}>35</option>
          </select>
        </div>
      </div>
      <div class="settingResult" style={{fontSize: this.state.size.toString()+"px", fontFamily: this.state.font}}>result</div>
      <div class="settingButton">
        <div onClick={this.cancel}>취소</div>
        <div onClick={this.apply}>적용</div>
      </div>
    </div>
    );
  }
}