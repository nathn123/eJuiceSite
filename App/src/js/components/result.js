import React from 'react'
import CalcStore from '../stores/calcStore'
import Resrow from './resrow'

export default class CalculatorResult extends React.Component {
    constructor()   {
        super();
        this.calcData = CalcStore.getCalcData();
        this.res = {
                    VG: {
                            ml:0,
                            perc:0
                        },
                    PG: {
                            ml:0,
                            perc:0
                        },
                    Nic: {
                            ml:0,
                            perc:0
                        },
                    flavours : []
                };
        this.calculateResults();
    }
    calculateResults() {
        console.log('calculator response ', this.res);
        let VG = this.calcData.Amount * (this.calcData.VG/100);
        let PG = this.calcData.Amount * (this.calcData.PG/100);
        this.res.Nic.ml = this.round((this.calcData.Nic / this.calcData.NicCon) * this.calcData.Amount,2);
        this.res.Nic.perc = this.round((this.res.Nic.ml / this.calcData.Amount)* 100,2);
        if (this.calcData.NicBase === 'PG')
            PG-=this.res.Nic.ml;
        else
            VG-=this.res.Nic.ml;
        this.res.flavours = [];
        this.calcData.flavours.forEach((flav,i) =>{
            this.res.flavours.push({
                name: this.calcData.flavours[i].name,
                ml: this.round(this.calcData.Amount * (flav.perc/100),2),
                perc: flav.perc,
            });
            if(flav.base === 'PG')
                PG -=this.res.flavours[i].ml;
            else
                VG -=this.res.flavours[i].ml;
        })
        this.res.PG.ml = this.round(PG,2);
        this.res.VG.ml = this.round(VG,2);
        this.res.PG.perc = this.round((PG/this.calcData.Amount)*100,2);
        this.res.VG.perc = this.round((VG/this.calcData.Amount)*100,2);
    }
    componentDidMount() {
        CalcStore.addEventListener(this.onChange.bind(this));
    }

    componentWillUnmount() {
        CalcStore.removeEventListener(this.onChange.bind(this));
    }
    onChange() {
        console.log('RESULT FORCED UPDATE');
        this.calculateResults();
        this.forceUpdate();
    }
    round(value, decimals) {
        return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
    }
    render () {
        let rows = [];
        for(let i = 0; i < this.res.flavours.length; i++)
        {
            rows.push(<Resrow key={i} {...this.res.flavours[i]} />)
        }
        return (
            <table>
                <tbody>
                    <tr>
                        <td>
                            PG
                        </td>
                        <td>
                            {this.res.PG.ml}ml
                        </td>
                        <td>
                            {this.res.PG.perc}%
                        </td>
                    </tr>
                    <tr>
                        <td>
                            VG
                        </td>
                        <td>
                            {this.res.VG.ml}ml
                        </td>
                        <td>
                            {this.res.VG.perc}%
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Nicotine
                        </td>
                        <td>
                            {this.res.Nic.ml}ml
                        </td>
                        <td>
                            {this.res.Nic.perc}%
                        </td>
                    </tr>
                    {rows}
                </tbody>
            </table>
        )
    }
}