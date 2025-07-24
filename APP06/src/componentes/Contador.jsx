import { useEffect, useState } from "react";

function Contador() {

    const [cont1, setCont1] = useState(0);
    const [cont2, setCont2] = useState(0);

    useEffect(()=>{
        console.log(Math.random());
    },[cont1]);

    return(

        <>
            <form>
            <input type="button" value="Contador 1: Incrementar +1" onClick={()=>setCont1(cont1+1)} />
            <br /> <br />
            <input type="button" value="Contador 2: Incrementar +2" onClick={()=>setCont2(cont2+2)} />
            </form>
            <p>Contador 1: {cont1}</p>
            <p>Contador 2: {cont2}</p>
        
        </>
        

    );
    
}

export default Contador;