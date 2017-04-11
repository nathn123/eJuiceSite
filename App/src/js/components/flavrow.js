import React from 'react'
export default class Flavrow extends React.Component {
    
    render() {
        return (
            <tr>
                <td>
                    Flavour
                </td>
                <td>
                    <input type="text" value={this.props.name} onChange= {(e) => {this.props.adjust(e.target.value);}}/>
                </td>
                <td>
                    Base
                </td>
                <td>
                <button onClick={(e) => {this.props.adjust(e.target.innerText);}}>
                    {this.props.base}
                </button>
                </td>
                <td>
                    Percentage Used
                </td>
                <td>
                    <input type="number" value={this.props.perc} onChange={(e) => {this.props.adjust(e.target.value)}}/>
                </td>
                <td> <button onClick={()=>{this.props.remove()}}>Remove</button></td>
            </tr>
        );
    }
} 