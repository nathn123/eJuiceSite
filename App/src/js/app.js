import React from 'react'
import ReactDOM from 'react-dom'
import Calculator from './components/calc'

    console.log('base hit');
class Base extends React.Component {
    render() {
        return (
                <Calculator/>
        );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<Base/>, app);