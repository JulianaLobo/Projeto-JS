import { useState } from "react";

function Formulario4(){

    const [form, setForm] = useState({
        nome: "",
        email: ""
    });

    const [output, setOutput] = useState(null);

    function updateForm(e){
        setForm({...form, [e.target.name]: e.target.value});
    }

    function mostrarInfo() {
        const { nome, email } = form;
        if((!nome.trim()) ) alert("Nome inválido!");
        else if ((!email.trim())) alert("Email inválido!");
        else setOutput({...form});
    }

    return(
        <>
            <h2>Formulário 4:</h2>
            <form>
                <label htmlFor="">Nome</label>
                <input type="text" name="nome" onChange={(e)=>updateForm(e)} />

                <label htmlFor="">Email:</label>
                <input type="email" name="email" onChange={(e)=>updateForm(e)} />

                <input type="button" value="Mostrar" onClick={mostrarInfo}/>               
                
            </form>

            {
                output && (
                    <>
                        <p>Nome: {form.nome}</p>
                        <p>Email: {form.email}</p>
                    </>
                )
            }

            
        </>
    )

}

export default Formulario4;