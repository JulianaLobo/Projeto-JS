import { useState } from "react";

function FormularioBonus(){

    // nome é uma variável de estado que vai controlar o conteúdo de "input:text"
    const [nomeIn, setNomeIn] = useState(""); //useState é um hook
    const [nomeOut, setNomeOut] = useState(""); //useState é um hook

    const [emailIn, setEmailIn] = useState(""); //useState é um hook
    const [emailOut, setEmailOut] = useState(""); //useState é um hook

    const [telefoneIn, setTelefoneIn] = useState(""); //useState é um hook
    const [telefoneOut, setTelefoneOut] = useState(""); //useState é um hook

    function MostrarValor(){
        setNomeOut(nomeIn);
        setEmailOut(emailIn);
        setTelefoneOut(telefoneIn);
    }

    return (
        <>
            <h2>Formulário Bônus:</h2>
            <form>
                <label htmlFor="">Nome: </label>
                <input type="text" onChange={(e)=>setNomeIn(e.target.value)} />

                <label htmlFor="">Email: </label>
                <input type="email" onChange={(e)=>setEmailIn(e.target.value)} />

                <label htmlFor="">Telefone: </label>
                <input type="text" onChange={(e)=>setTelefoneIn(e.target.value)} />

                <input type="button" value="Mostrar" onClick={MostrarValor}/>
            </form>
            <p>{nomeOut}</p>
            <p>{emailOut}</p>
            <p>{telefoneOut}</p>
        </>
    )
}

export default FormularioBonus; //Aula 02 de react compactar o src