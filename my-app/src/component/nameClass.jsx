import { Component } from "react";

class NameChangeClass extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'John'
        }
    }
    handleChangeName=()=>{
        this.setState({name:'Jane'});
    };
    render(){
        return(
            <div>
                <h2> Hello,{this.state.name}!</h2>
                <button onClick={this.handleChangeName}>Change Name</button>
            </div>
        );
    }
}

export default NameChangeClass;
