import React, { Component, useState } from 'react';
import '../../assets/styles/styles.css';

function Conversor() {
    const [tempo, setTempo] = useState({time: "00:00",timeInMinutes: ""});

    function handleEvent(e) {
        e.preventDefault();
        setTempo({...tempo, [e.target.name]: e.target.value});
        // setTempo({...tempo, timeInMinutes: ""});
    }
    function converter(e) {
        // e.preventDefault();
        let finalTime = parseInt(tempo.time.split(":")[0])*60 + parseInt(tempo.time.split(":")[1]);
        setTempo({...tempo, timeInMinutes: finalTime});
         e.preventDefault();
    }
    return (
        <form className="login">
            <h1>Hora para minutos</h1>
            <input type="text" name="time" onChange={e=>handleEvent(e)} placeholder="00:00"/>
            <button onClick={e=>converter(e)}>Converter</button>
            <p>Minutos: {tempo.timeInMinutes}</p>
        </form>
    );
}

export default Conversor;
