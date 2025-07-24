import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/styles.css';

function Home() {
    return (
        <>
            <section className="container">
                <div>
                    <Link to="/login"><img src="images/login.png" alt="" /></Link>
                    <h2>Login</h2>
                </div>
                <div>
                    <Link to="/calculadora"><img src="images/calculadora.jpg" alt="" /></Link>
                    <h2>Calculadora</h2>
                </div>
                <div>
                    <Link to="/conversor"><img src="images/ampulheta.jpg" alt="" /></Link>
                    <h2>Conversor</h2>
                </div>
            </section>
        </>
    );
}

export default Home;