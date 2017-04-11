import React, { Component } from 'react';

  class App extends Component {
    constructor(){
      super()
      this.state={
        Number:30,
        Guess:'',
        Output:'',
  }
}

    onchange = (event) =>{
      this.setState({Guess:event.target.value})
    }
    onclick =()=>{
      if(this.state.Guess<=this.state.Number){
        this.setState({Output:'Gamay'})
    }
      else if(this.state.Guess>this.state.Number){
        this.setState({Outout:'Dako ra'})
    }
      else if(this.state.Guess==this.state.Number){
        this.setState({Output:'You Damn Right!'})
    }
      else {
        this.setState({Output:'Put some Fucking Number!'})
    }

}






  render(){

    const style={textAlign:'center',
                  color:'red'
                }
    return(

          <div style={style}>
          <h1 style={style}>Guess My Birthday</h1>
          <h1>{this.state.Guess|| 'xx'}</h1>
          <h1>{this.state.Output}</h1>
          <input type="number" onChange={this.onchange}></input>
          <br /><br />
          <button className="btn btn-warning" onClick={this.onclick}>Submit</button>

</div>

    )


  }
}
  export default App;
