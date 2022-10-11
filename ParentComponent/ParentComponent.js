import { Component } from "react";
import ChildComponent from "./ChildComponent";

export class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count : 0,
            shouldDisplay:false,
        }
}
handleClick = () => {
    this.setState({count:this.state.count+1, shouldDisplay: true})
}

render() {
return (
        <div>
            <button onClick={this.handleClick}>update count</button>
            {
                this.state.count
            }
            {this.state.shouldDisplay && <p>{this.state.count}</p>}
            <ChildComponent id={this.state.count}/>
        </div>
      )
    }
}

export default ParentComponent
