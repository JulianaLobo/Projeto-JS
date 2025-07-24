import React, { useState } from 'react';
import '../../assets/styles/styles.css';

function Login() {
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!senha || !confirmarSenha) {
            alert('Por favor, preencha ambos os campos.');
            return;
        }

        if (senha === confirmarSenha) {
            alert('Login realizado com sucesso!');
        } else {
            alert('Senha e/ou confirmar senha são diferentes. Tente novamente!');
        }
    };

    return (
        <div className="form-box">
            <h2>Acesso ao sistema</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Confirmar senha"
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">
                    Entrar
                </button>
            </form>
        </div>
    );
}

export default Login;