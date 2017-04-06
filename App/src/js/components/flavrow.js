import React from 'react'
export default class Flavrow extends React.Component {
    
    render() {
        return (
            <tr>
                <td>Flavour</td>
                <td>
                    {flav.name}
                </td>
                <td>
                    Base
                </td>
                <td>
                    <label class="switch">
                        <input type="checkbox"/>
                        <div class="slider round"></div>
                    </label>
                </td>
                <td>
                    Percentage Used
                </td>
                <td>
                    <input type="number" value={flav.perc}/>
                </td>
            </tr>
        );
    }
} 