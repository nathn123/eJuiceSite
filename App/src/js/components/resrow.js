import React from 'react'
export default class Flavrow extends React.Component {
    
    render() {
        return (
            <tr>
                <td>
                    {this.props.name}
                </td>
                <td>
                    {this.props.ml}ml
                </td>
                <td>
                    {this.props.perc}%
                </td>
            </tr>
        );
    }
} 