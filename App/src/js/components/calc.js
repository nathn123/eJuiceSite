import React from 'react'
import CalcStore from '../stores/calcStore'
import * as calcActions from '../actions/calcActions'
import Flavrow from './flavrow'

export default class Calculator extends React.Component {
    constructor() {
        super();
        this.state = CalcStore.getCalcData();
    }
    componentDidMount() {
        CalcStore.addEventListener(this.onChange.bind(this));
    }

    componentWillUnmount() {
        CalcStore.removeEventListener(this.onChange.bind(this));
    }
    onChange() {
        this.forceUpdate();
    }
    render() {
        let rows = [];
        console.log('render state , ',this.state);
        for(let i = 0; i < this.state.flavours.length; i++)
        {
            rows.push(<Flavrow key={i} 
                                adjust={(val) => {calcActions.ChangeFlav(i, val);}} 
                                remove={() => {calcActions.RemoveFlav(i);}} 
                                {...this.state.flavours[i]}
                                />)
        }
        return (
            <table className='.table-hover'>
                <tbody>
                <tr >
                    <td>Amount To Make</td>
                    <td>
                        <input  type="number" value={this.state.Amount} onChange={(e) => {
                            console.log(e.target.value);
                            calcActions.ChangeAmount(e.target.value);
                            }}/>
                    </td>
                    <td>Nicotine</td>
                    <td>
                        <input type="number" value={this.state.Nic} onChange={(e) => {calcActions.ChangeNic(e.target.value);}}/>mg/ml
                    </td>
                    <td>Nicotine Base</td>
                    <td>
                        <button onClick={(e) => {calcActions.ChangeNic(e.target.innerText);}}>{this.state.NicBase}</button>
                    </td>
                    <td>Nicotine Concentrate</td>
                    <td>
                        <input type="number" value={this.state.NicCon} onChange={(e) => {calcActions.ChangeNicCon(e.target.value);}}/>mg/ml
                    </td>
                </tr>
                <tr>
                    <td>VG</td>
                    <td>
                        <input type="number" value={this.state.VG} onChange={(e) => {
                            console.log(e.target.value);
                            calcActions.ChangeVG(e.target.value);
                            }}/>
                    </td>
                    <td>PG</td>
                    <td>
                        <input type="number" value={this.state.PG} onChange={(e) => {
                            console.log(e.target.value);
                            calcActions.ChangePG(e.target.value);
                            }}/>
                    </td>
                </tr>
                {rows}
                <tr>
                    <td>Add new Flavour</td>
                    <td>
                        <button onClick={() => {
                            calcActions.AddFlav({});
                            }}>Add</button>
                    </td>    
                </tr>
                </tbody>
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