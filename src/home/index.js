import './home.css'

import Banner from '../componentes/Banner';
import Formulario from '../componentes/Formulario';
import { useState } from 'react';
import Time from '../componentes/time';

const Home = () => {

    const [colaboradores, setColaboradores] = useState([])

    const novoColaboradorCadastrado = (colaborador) => {
        console.log(colaborador)
        setColaboradores([...colaboradores, colaborador])
    }

    return (

    <div className="App">
      <Banner />
      <Formulario aoCadastrarColaborador={colaborador => novoColaboradorCadastrado(colaborador)}/>
      <Time nomeTime={'Programação'}/>
      <Time nomeTime={'Frontend'}/>

    </div>
    )
}

export default Home

