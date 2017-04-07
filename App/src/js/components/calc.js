import React from 'react'
import CalcStore from '../stores/calcStore'
import Flavrow from './flavrow'

export default class Calculator extends React.Component {
    Constructor() {
        this.state = {};
    }
    onChange() {
        this.state = CalcStore.getCalcData();
    }
    render() {
        let rows = [];
        console.log(this.state);
        for(let i = 0; i < this.state.flavours.length -1; i++)
        {
            console.log(i);
            rows.push(<Flavrow {...this.state.flavours[i]} />)
        }
        return (
            <table>
                <tr>
                    <td>VG</td>
                    <td>{this.state.VG}%</td>
                    <td>PG</td>
                    <td>{this.state.PG}%</td>
                    <td>Nicotine</td>
                    <td>{this.state.Nic}%</td>
                </tr>
                {rows}
            </table>
        );
    }
} 


// {
//             VG: 50,
//             PG: 50,
//             Nic: 6,
//             flavours : [{
//                 name: 'test1',
//                 base: 'PG',
//                 perc: 15
//             },{
//                 name: 'test4',
//                 base: 'PG',
//                 perc: 5
//             },{
//                 name: 'test3',
//                 base: 'VG',
//                 perc: 9
//             }
//             ]
//         }