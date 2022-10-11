import { Paper, TextField, Typography } from "@mui/material";
import React, { Component } from "react";
export class Sibling1 extends Component {
 constructor(props) {
 super(props);
 this.state = {
 sibling1Value: "",
 };
 }
 handleChange = (e) => {
 this.setState({ sibling1Value: e.target.value });
 this.props.onClick(e.target.value);
 };
    render() {
    return (
         <Paper style={{ margin: "20px", padding: "20px", textAlign:
            "center" }}>
        <Typography variant="h4"> Sibling1 </Typography>
        <TextField
            variant="standard"
            placeholder="Enter some text"
            onChange={this.handleChange}
            value={this.state.sibling1Value}
            />
        </Paper>
    );
 }
}
export default Sibling1