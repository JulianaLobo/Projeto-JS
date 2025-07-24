import React from "react";
import SecaoServicos from './SecaoServicos';
import Card from "./Card";

function Main({main}){
    return(
        <main>
            <SecaoServicos/>
            <Card imagem="" texto="Editais"/>
        </main>
    );
}

export default Main;