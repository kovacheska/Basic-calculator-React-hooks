import React, { useState } from 'react';
import './Calculator.scss';
import Result from './components/Result/Result';
import Keyboard from './components/Keyboard/Keyboard';

function App() {
    const [result, setResult] = useState('');

    const onClick = value => {
        if (value === '=') {
            calculate()
        } else if (value === 'C') {
            reset()
        } else if (value === 'CE') {
            backspace()
        } else {
            setResult(`${result}${value}`)
        }
    };


    const calculate = () => {
        let checkResult = ''

        if (result.includes('--')) {
            checkResult = result.replace('--','+')
        } else {
            checkResult = result
        }

        try {
            setResult(eval(checkResult) || '')
        } catch (e) {
            setResult('Error!')

        }
    };

    const reset = () => {
       setResult('');
    };

    const backspace = () => {
        setResult(result.slice(0, -1));
    };

    return (
        <div>
            <div className='calculator-container'>
                <h1>Calculator</h1>
                <Result result={result}/>
                <Keyboard onClick={onClick}/>
            </div>
        </div>
    );
}

export default App;