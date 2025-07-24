import React from 'react';
import Apresentacao from './components/Apresentacao';
import ApresentacaoDestructuring from './components/ApresentacaoDestructuring';
import Card from './components/Card';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Curso from './components/Curso';
import "./App.css";

function App() {
  return (
    // <>
    //   <Apresentacao titulo="Título A" subtitulo="Subtítulo A"/>
    //   <Apresentacao titulo="Título B" subtitulo="Subtítulo B"/>
    //   <Apresentacao titulo="Título C" subtitulo="Subtítulo C"/>
    //   <ApresentacaoDestructuring titulo="Título A" subtitulo="Subtítulo A"/>
    //   <ApresentacaoDestructuring titulo="Título B" subtitulo="Subtítulo B"/>
    //   <ApresentacaoDestructuring titulo="Título C" subtitulo="Subtítulo C"/>
    //   <Card imagem="" texto="aaaaaaaaaaaaaaa"/>
    //   <Card imagem="" texto="Editais"/>
    // </>  

    <>
      <Header header="sou header da página"/>
      <Main main="sou main da página"/>
      <Footer footer="sou footer da página"/>
      <Curso nome="Juliana Sousa Lobo"/>

    </>
    
  )
}

export default App
