class Problem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h2>{this.props.title}</h2>

        <div class="p_subUnit">
          <div class="p_subUnitTitle">문제</div>
          <div class="p_subUnitContent">{this.props.problem}</div>
        </div>
        <div class="p_subUnit">
          <div class="p_subUnitTitle">입력</div>
          <div class="p_subUnitContent">{this.props.input}</div>
        </div>
        <div class="p_subUnit">
          <div class="p_subUnitTitle">출력</div>
          <div class="p_subUnitContent">{this.props.output}</div>
        </div>
        <div class="p_subUnit">
          <div class="p_subUnitTitle">조건</div>
          <div class="p_subUnitContent">
            {this.props.condition.map(element => {
              return <div>{element}</div>;
            })}
          </div>
        </div>
      </div>
    );
  }
}