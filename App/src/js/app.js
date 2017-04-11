import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'react-router'
import Calculator from './components/calc'
import Results from './components/result'

    console.log('base hit');
class Base extends React.Component {
    render() {
        return (
            <div>
                <Calculator/>
                <Results/>
            </div>
        );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<Base/>, app);