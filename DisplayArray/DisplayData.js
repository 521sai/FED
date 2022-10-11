import React, { Component } from "react";
import { products } from "./data";
import "./colors.css";

export class DisplayData extends Component {
    render(){
        return(
            <div>
            <table border={1} align={"center"}>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
            </tr>
            {products.map((item) => {
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>{item.total}</td>
                    </tr>
                );
            })}
            </table>
            </div>
        );
    }
}

export default DisplayData;