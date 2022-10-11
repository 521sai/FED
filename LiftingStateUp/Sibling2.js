import { Paper, TextField, Typography } from '@mui/material'
import React, { Component } from 'react'
export class Sibling2 extends Component {
 constructor(props) {
    super(props)

    this.state = {
    sibling2Value: "",
 };
}
handleChange = (e) => {
    this.setState({ sibling2Value: e.target.value });
    this.props.onClick(e.target.value);
    };
    static getDerivedStateFromProps(props,state){
    return state.sibling2Value = props.value;
    }
    render() {
    return (
            <Paper style={{margin:'20px', padding: '20px',
                textAlign:'center'}}>
            <Typography variant='h4' > Sibling2</Typography>
            <Typography
                variant='caption'>{this.state.sibling2Value}</Typography>
            <TextField
                    variant="standard"
                    placeholder="Enter some text"
                    onChange={this.handleChange}
                    value={this.state.sibling2Value}
                    />
            </Paper>
            )
        }
}
export default Sibling2;