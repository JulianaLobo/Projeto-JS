import React from "react";

function Card({imagem, texto}){
    return(
        <div className="box">
            <img src={imagem} alt="" />
            <br />
            <p>{texto}</p>
        </div>      

    );
}

export default Card;