import { useState } from "react";
import emailjs from "@emailjs/browser";

function Formulario5(){

    const [form, setForm] = useState({
        nome: "",
        email: ""
    });

    const [msgEnvio, setMsgEnvio] = useState("");


    const templateParams = {
        from_name: form.nome,
        from_email: form.email,
    };

    function updateForm(e){
        setForm({...form, [e.target.name]: e.target.value});
    }

    function mostrarInfo() {
        const { nome, email } = form;
        if((!nome.trim()) ) alert("Nome inválido!");
        else if ((!email.trim())) alert("Email inválido!");
        else {
            emailjs
                .send('service_lst8mle', 'template_ppvhdhq', templateParams, 'f1p35Hz1O__kSyRyw')
                .then(
                    function (response) {
                        setUsuarioIn({...usuarioIn, nome:"", email:""});
                        setMsgEnvio("Email enviado com sucesso!");
                    },
                    function (error) {
                        setMsgEnvio("ERRO ao enviar email!");
                    }
                );
            setMsgEnvio("Aguarde um instante! Enviando ...");

        }
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
            <p>{msgEnvio}</p>

        </>
    )

}

export default Formulario5;