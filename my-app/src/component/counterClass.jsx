import { Component } from "react";


// render
// component did Mount
// component will update
// component did unmount

class CounterClass extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
        
    }
    handleChange=()=>{
        this.setState({count : this.state.count + 1})
      
    };
    render(){
        return(
            <div>
                <h2> Count: {this.state.count}</h2>
                <button onClick={this.handleChange}>CounterChange</button>
            </div>
        );
    }

}

export default CounterClass;