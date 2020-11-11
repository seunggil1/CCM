class Examples extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props);
    var examples = this.props.list.map(value => {
      return <Example
        index={value.index}
        img={value.img}
        input={value.input}
        output={value.output}
      />;
    });

    return <div>{examples}</div>
  }
}