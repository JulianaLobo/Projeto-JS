import { useState } from "react";

function Formulario1(){

    // nome é uma variável de estado que vai controlar o conteúdo de "input:text"
    const [nome, setNome] = useState(""); //useState é um hook

    return (
        <>
            <h2>Formulário 1:</h2>
            <form>
                <label htmlFor="">Nome: </label>
                <input type="text" onChange={(e)=>setNome(e.target.value)} />
            </form>
            <p>{nome}</p>
        </>
    )
}

export default Formulario1;