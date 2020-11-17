class EditorSetting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size : "20",
      font : "Consolas",
    };

    this.check = this.check.bind(this);
  }

  render(){
    var imgTag,timeTake = "",color = "black e_UnitTitle";
    var tried = <i></i>;
    if(this.state.try){
      if(this.state.success){
        tried = <i class="fas fa-check"></i>;
        color = "green e_UnitTitle";
        timeTake = ` ( ${this.state.time} ms )`;
      }
      else{
        tried = <i class="fas fa-times"></i>;
        color = "red e_UnitTitle";
        timeTake = ` ( ${this.state.time} ms )`;
      }
    }
    if(this.props.img != null){
      imgTag = <img src={this.props.img} width="100%"/>
    }

    return (
    <div class="setting">
      <div class="settingUnit">
        <span>Font</span>
        <div>
          <select name="font" id="fontSelect" onchange="">
            <option value="D2Coding" style="font-family: D2Coding;">D2Coding</option>
            <option value="Consolas" style="font-family: Consolas;">Consolas</option>
            <option value="IBM Plex Mono" style="font-family: IBM Plex Mono;">IBM Plex Mono</option>
          </select>
        </div>
      </div>
      <div class="settingUnit">
        <span>Size</span>
        <div>
          <select name="size" id="sizeSelect">
            <option value="15" style="font-size: 15px;">15</option>
            <option value="17" style="font-size: 17px;">17</option>
            <option value="20" style="font-size: 20px;">20</option>
            <option value="25" style="font-size: 25px;">25</option>
            <option value="30" style="font-size: 30px;">30</option>
            <option value="35" style="font-size: 35px;">35</option>
          </select>
        </div>
      </div>
      <div class="settingUnit">
        <span>Language</span>
        <div>
          <select name="programLang" id="programLangSelct">
            <option value="c">c</option>
            <option value="cpp">cpp</option>
            <option value="python">python</option>
          </select>
        </div>
      </div>
      <div class="settingResult">
        result
      </div>
    </div>
    );
  }
}