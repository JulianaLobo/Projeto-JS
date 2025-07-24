import { useState } from "react";

function Formulario3(){

    // nome é uma variável de estado que vai controlar o conteúdo de "input:text"
    const [nomeIn, setNomeIn] = useState(""); //useState é um hook
    const [nomeOut, setNomeOut] = useState(""); //useState é um hook

    function MostrarValor(){
        setNomeOut(nomeIn)
    }

    return (
        <>
            <h2>Formulário 3:</h2>
            <form>
                <label htmlFor="">Nome: </label>
                <input type="text" onChange={(e)=>setNomeIn(e.target.value)} />
                <input type="button" value="Mostrar" onClick={MostrarValor}/>
            </form>
            <p>{nomeOut}</p>
        </>
    )
}

export default Formulario3;