import React from "react";

function Apresentacao(props){
    return(
        <>
            <h2>{props.titulo}</h2>
            <p>{props.subtitulo}</p>
        </>
    )
}

export default Apresentacao;