//https://wilton-filho.github.io/PFJS-GitHub/APIs/fetch/versao01/03/js/users.json

import { useEffect, useState } from "react";
import style from './Ranking.module.css';

function Ranking(){

    const [users, setUsers] = useState(null);
    const url = 'https://wilton-filho.github.io/PFJS-GitHub/APIs/fetch/versao01/03/js/users.json'

    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then(dados => setUsers(dados.users))
    },[]);

    function showUsers(){
        return(
            <ul>
                {users.map(user =><li> <span className={style.alerta}>{user.name}</span> ({user.level}:{user.score})</li>)}
            </ul>
        )

    }

    return(
        <>
            <h2>Melhores colocados (Rankin): </h2>
            {users && showUsers()}
        </>
    );
}

export default Ranking;