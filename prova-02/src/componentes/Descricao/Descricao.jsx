import React from "react";
import style from './Descricao.module.css';

function Descricao({ titulo, subtitulo }) {
    return (
        <>
        <div className={style.container}>
            <h2>{titulo}</h2>
            <p>{subtitulo}</p>
        </div>
        </>
    );
}

export default Descricao;