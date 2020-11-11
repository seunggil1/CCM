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

    xmlhttp.open("POST", "url");
    xmlhttp.send({
      problemNumber : "??",
      caseNumber : this.props.index,
      language : "",
      code : "",
    });
  }

  render() {
    var tried = <i></i>;
    var imgTag,color = "black";
    if(this.state.try){
      if(this.state.success){
        tried = <i class="fas fa-check"></i>;
        color = "green";
      }
      else{
        tried = <i class="fas fa-times"></i>;
        color = "red";
      }
    }
    if(this.props.img != null){
      imgTag = <img src={this.props.img} width="100%"/>
    }

    return (
      <div style={{width: '400px'}}>
        <div class={color}>
          <span>예제 {this.props.index}</span>&nbsp;
          {tried}
          <i class="fas fa-play" style={{float: 'right'}} onClick={this.check}></i>
        </div>
        <div>{imgTag}</div>
        <div class="horizontal">
          <div class="box rightLine">
            <div class="boxTitle">입력</div>
            <div class="boxContent">{
              this.props.input.split('\n').map( 
                line => (<span>{line}<br/></span>))
            }</div>
          </div>
          <div class="vertical">
            <div class="box">
              <div class="boxTitle">출력</div>
              <div class="boxContent">{this.props.output}</div>
            </div>
            <div class="box">
              <div class="boxTitle">결과</div>
              <div class="boxContent">{this.state.result}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}