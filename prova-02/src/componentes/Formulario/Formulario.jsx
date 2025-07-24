import { useState } from "react";

function Formulario() {
    const [form, setForm] = useState({
        email: ""
    });

    function validarEmail() {
        const { email } = form;
        if (!email.trim()) alert("Email em branco. Favor informá-lo.");
        else alert("Email informado. OK!");
    }

    return (
        <>
        <div>
            <form>
                <label htmlFor="">Email: </label>
                <input 
                    type="email" 
                    onChange={(e) => setForm({ email: e.target.value })}
                />
                <input type="button" value="Enviar" onClick={validarEmail} />
            </form>
            <p>{form.email}</p>
        </div>
            
        </>
    );
}

export default Formulario;