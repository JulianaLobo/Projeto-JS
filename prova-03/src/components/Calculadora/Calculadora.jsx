import React, { Component, useState } from 'react';
import '../../assets/styles/styles.css';

function Calculadora() {

    const [calc, setCalc] = useState({
    value_1: 0,
    value_2: 0,
    result: 0
    }); 

    function handleEvent(e) {
        e.preventDefault();
        setCalc({...calc, [e.target.name]: parseFloat(e.target.value)});
    }

    function calcular(e) {
        e.preventDefault();
        setCalc({...calc, result: eval(calc.value_1 + e.target.name + calc.value_2)});
    }

    return (
        <div>
            <form className="login formCalc">
                <h1>Calculadora</h1>
                <input type="text" name="value_1" placeholder="Valor 1" onChange={e=>handleEvent(e)}/><br/>
                <input type="text" name="value_2" placeholder="Valor 2" onChange={e=>handleEvent(e)}/><br/>
                <button name="+" onClick={e=>calcular(e)}> + </button>
                <button name="-" onClick={e=>calcular(e)}> - </button>
                <button name="*" onClick={e=>calcular(e)}> * </button>
                <button name="/" onClick={e=>calcular(e)}> / </button>
                <button name="%" onClick={e=>calcular(e)}> % </button>
                <input type="text" name="result" value={calc.result} placeholder="Resultado"/><br/>
            </form>
        </div>
    );
}

export default Calculadora;