import React from 'react'
export default class Flavrow extends React.Component {
    
    render() {
        return (
            <tr>
                <td>
                    Flavour
                </td>
                <td>
                    {this.props.name}
                </td>
                <td>
                    Base
                </td>
                <td>
                    {this.props.base}
                </td>
                <td>
                    Percentage Used
                </td>
                <td>
                    <input type="number" value={this.props.perc}/>
                </td>
            </tr>
        );
    }
} 