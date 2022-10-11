import { Paper, Typography } from "@mui/material";
import React, { Component } from "react";
import Sibling1 from "./Sibling1";
import Sibling2 from "./Sibling2";
export class Parent extends Component {
 constructor(props) {
 super(props);
 this.state = {
 parentValue: "null",
 };
 }
 handleClick = (value) => {
 this.setState({ parentValue: value });
 };
 render() {
 return (
 <Paper
 elevation={3}
 style={{
 width: "70%",
 margin: "auto",
 padding: "20px",
 textAlign: "center",
 }}
 >
 <Typography variant="h3">Parent</Typography>
 <Typography variant="caption">
 {" "}
 value: {this.state.parentValue}{" "}
 </Typography>
 <div
 style={{
 display: "flex",
 margin: "auto",
 width: "50%",
 alignItems: "center",
 justifyContent: "center",
 }}
 >
 <Sibling1 onClick={(value) => this.handleClick(value)} />
 <Sibling2 value={this.state.parentValue} />  
 
 
 </div>
 </Paper>
 );
 }
}
export default Parent;