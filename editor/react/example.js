class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      result : "",
      time: "",
      try: false,
    };

    this.check = this.check.bind(this);
  }

  check(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState == XMLHttpRequest.DONE){
        if (xmlhttp.status == 200){
          var resultJson = JSON.parse(xmlhttp.responseText);
          this.setState({
            success : resultJson.success,
            result : resultJson.output,
            time : resultJson.time,
            try : true,
          });
        }
        else alert('something else other than 200 was returned');
      }
    };

    var data = {
      problemNum : problemNum,
      caseNum : this.props.index,
      lang : programLang,
      code : editor.getValue(),
    }
    xmlhttp.open("POST", "/exec");
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.send(JSON.stringify(data));
  }

  render(){
    var imgTag,timeTake = "",color = "black e_Title";
    var tried = <i></i>;
    if(this.state.try){
      if(this.state.success){
        tried = <i class="fas fa-check"></i>;
        color = "green e_Title";
        timeTake = ` ( ${this.state.time} ms )`;
      }
      else{
        tried = <i class="fas fa-times"></i>;
        color = "red e_Title";
        timeTake = ` ( ${this.state.time} ms )`;
      }
    }
    if(this.props.img != null){
      imgTag = <img src={this.props.img} width="100%"/>
    }

    return (
      <div class="e_Unit">
        <div class={color}>
          <span>예제 {this.props.index}</span>&nbsp;
          {tried}
          <i class="fas fa-play" style={{float: 'right'}} onClick={this.check}></i>
        </div>
        <div>{imgTag}</div>
        <div class="horizontal">
          <div class="e_subUnit rightLine">
            <div class="e_subUnitTitle">입력</div>
            <div class="e_subUnitContent">{
              this.props.input.split('\n').map( 
                line => (<span>{line}<br/></span>))
            }</div>
          </div>
          <div class="vertical">
            <div class="e_subUnit">
              <div class="e_subUnitTitle">정답</div>
              <div class="e_subUnitContent">{this.props.output}</div>
            </div>
            <div class="e_subUnit">
              <div class="e_subUnitTitle">결과{timeTake}</div>
              <div class="e_subUnitContent">{this.state.result}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}