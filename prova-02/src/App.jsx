import { useState } from 'react'
import Descricao from './componentes/Descricao/Descricao'
import Ilustracao from './componentes/Ilustracao/Ilustracao'
import Formulario from './componentes/Formulario/Formulario'
import Perguntas from './componentes/Perguntas/Perguntas'
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const imagemNicolas = './src/img/foto-nicolas.JPG'
  const imagemNicolasFrente = './src/img/foto-nicolas-frente.JPG'

  return (
    <>
      <section className="section1">
        <Descricao titulo="Você que procura mais do que um advogado" subtitulo="Procura comprometimento, preparo técnico, sensibilidade no atendimento e estratégias jurídicas eficazes"/>
        <Ilustracao imagem={imagemNicolas} texto="Nicolas Ribeiro Neves"/>
      </section>
      <section className="section2">
        <Ilustracao imagem={imagemNicolasFrente} texto="Nicolas Ribeiro Neves"/>
        <div>
          <Descricao titulo="O que me diferencia de outros profissionais e escritórios jurídicos" subtitulo="Você será atendido diretamente por mim — sem repasses ou terceirizações. Minha trajetória, construída desde a graduação, é marcada por experiências em instituições de referência, como o Ministério Público de Minas Gerais, onde atuei sob a supervisão da Promotora Dra. Carolina Marques Andrade e da Dra. Angélica Medeiros. Lá, aprimorei minha capacidade de análise jurídica, elaboração de manifestações e atuação em casos sensíveis de Direito Civil, Família, Sucessões, Meio Ambiente e Direitos Coletivos."/>
          <Formulario/>
        </div>
      </section>
      <section className="section3">
        <Perguntas/>
      </section>

    </>
  )
}

export default App
