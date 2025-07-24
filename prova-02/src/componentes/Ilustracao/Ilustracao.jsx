import React from "react";
import style from './Ilustracao.module.css';

function Ilustracao({imagem, texto}){
    return(
        <>
        <div className={style.container} >
            <img src={imagem} alt="" className={style.size} />
            <p>{texto}</p>
        </div> 
        </>      

    );
}

export default Ilustracao;