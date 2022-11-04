import './home.css'

import Banner from '../componentes/Banner';
import Formulario from '../componentes/Formulario';
import { useState } from 'react';

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

    </div>
    )
}

export default Home

