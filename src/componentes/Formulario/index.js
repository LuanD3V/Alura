import { useState } from 'react'

import './Formulario.css'

import InputText from '../InputText'
import ListaSuspensa from '../ListaSuspensa'
import Button from '../Button'
import React from 'react'

const Formulario = (props) => {

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoCadastrarColaborador({
            nome,
            cargo,
            imagem,
            time
        })
    }

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    return (
        <section className='box-form'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o Card</h2>
                <InputText 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterar={valor => setNome(valor)}
                    />
                <InputText 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor)}
                    />
                <InputText 
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="Anexe a sua imagem"
                    valor={imagem}
                    aoAlterar={valor => setImagem(valor)}
                    />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterar={valor => setTime(valor)}
                    />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Formulario