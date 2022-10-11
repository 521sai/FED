import { Component } from "react";
import "./Styles.css";

export class ChangeColors extends Component{
    constructor(props){
        super(props);

        this.state= {
            showRed:true,
            showYellow:false,
            showGreen:false,
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                showRed:false, showYellow:true, showGreen:false
            });
    },4000);
}
componentDidUpdate(prevProps, prevState) {
    console.log("prevProps:", prevProps);
    console.log("prevState:", prevState);
    console.log("CurrentProps:", this.props);
    console.log("prevProps:", this.state);
    if (this.state.showYellow) {
        setTimeout(()=>{
            this.setState({
                showRed:false,showYellow:false,showGreen:true
            });
        },2000);
    }
    if(this.state.showGreen){
        setTimeout(()=>{
        this.setState({showRed: true, showYellow: false, showGreen:
       false})
        },4000);
    }
    if(this.state.showRed){
        setTimeout(() => {
        this.setState({ showRed: false, showYellow: true,
       showGreen: false });
        }, 4000);
    }
}
    render() {
        return (
        <div>
            <div className={this.state.showRed ? "circle-red" : "circle"} />
            <div className={this.state.showYellow ? "circle-yellow" : "circle"} />
            <div className={this.state.showGreen ? "circle-green" : "circle"} />

         </div>
        );
    }
}
export default ChangeColors;
