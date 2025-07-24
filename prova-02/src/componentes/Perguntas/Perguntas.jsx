import { useEffect, useState } from "react";
import style from './Perguntas.module.css';

function Perguntas() {

    const [faqs, setFaqs] = useState(null);
    const url = 'https://wilton-filho.github.io/PFJS-GitHub/React/projeto/json/faqprova.json'

    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then(dados => setFaqs(dados.faqs))
    },[]);
   

    function showFaqs(){
            return(
                <ul>
                    {faqs.map(faq =><li> <span className={style.pergunta}>{faq.pergunta}</span>  ({faq.resposta})</li>)}
                </ul>
            )
    
        }

    return (
        <>
        <div className={style.container}>
            <h2>Perguntas Frequentes</h2>
        </div>
        <div className={style.container}>
            {faqs && showFaqs()}
        </div>
        </>
    );
}

export default Perguntas;