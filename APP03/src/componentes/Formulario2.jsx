import { useState } from "react";

function Formulario2(){

    const [nome, setNome] = useState("Informe um nome válido");
    const [email, setEmail] = useState("Informe um email válido");

    return(
        <>
            <h2>Formulário 2:</h2>
            <form>
                <label htmlFor="">Nome</label>
                <input type="text" onChange={(e)=>setNome(e.target.value)} />
                <label htmlFor="">Email:</label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} />
                <p>Nome: {nome}</p>
                <p>Email: {email}</p>
            </form>
        </>
    )

}

export default Formulario2;