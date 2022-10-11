import { Component } from "react";

export class ChildComponent extends Component {
    constructor(props) {
        super(props)

        this.state= {
            value:0,
            data: [],
            resultData: [],
        }
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users/")
        .then((Response)=> Response.json())
        .then((res)=> {
            console.log(res);
            this.setState({data : res});
        });
    }
    static getDerivedStateFromProps(props,state) {
        state.value = props.id;
    }
    getSnapshotBeforeUpdatee(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate')
        return prevProps.id;
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log(snapshot,this.state);
        if(prevState.value !== prevProps.id){
        const result = this.state.data.filter((row) => {
        return (row.id === this.state.value);
        });
        this.setState({resultData: result});
        }
    }
    render() {
    console.log('value: ',this.state.value);
    return (
        <div>
            <table border={1}>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
            {this.state.resultData.map((row) => {
            return (
                <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.phone}</td>
                    <td>{row.email}</td>
                </tr>
            )
            })}
            </table>
        </div>
    )
}
}

export default ChildComponent