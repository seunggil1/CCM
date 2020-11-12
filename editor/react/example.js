class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      result : "",
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
    var tried = <i></i>;
    var imgTag,color = "black exampleTitle";
    if(this.state.try){
      if(this.state.success){
        tried = <i class="fas fa-check"></i>;
        color = "green exampleTitle";
      }
      else{
        tried = <i class="fas fa-times"></i>;
        color = "red exampleTitle";
      }
    }
    if(this.props.img != null){
      imgTag = <img src={this.props.img} width="100%"/>
    }

    return (
      <div class="exampleUnit">
        <div class={color}>
          <span>예제 {this.props.index}</span>&nbsp;
          {tried}
          <i class="fas fa-play" style={{float: 'right'}} onClick={this.check}></i>
        </div>
        <div>{imgTag}</div>
        <div class="horizontal">
          <div class="subUnit rightLine">
            <div class="subUnitTitle">입력</div>
            <div class="subUnitContent">{
              this.props.input.split('\n').map( 
                line => (<span>{line}<br/></span>))
            }</div>
          </div>
          <div class="vertical">
            <div class="subUnit">
              <div class="subUnitTitle">정답</div>
              <div class="subUnitContent">{this.props.output}</div>
            </div>
            <div class="subUnit">
              <div class="subUnitTitle">결과</div>
              <div class="subUnitContent">{this.state.result}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}