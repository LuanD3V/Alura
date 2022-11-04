import { useState } from 'react'
import './Formulario.css'
import InputText from '../InputText'
import ListaSuspensa from '../ListaSuspensa'
import Button from '../Button'
import React from 'react'

const Formulario = () => {

    const organizacao = [
        'Programação',
        'Frontend',
        'Data Science',
        'Ux e Design',
        'Devops',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log("O formulário foi salvo =>", nome, cargo, endereco, time)
    }

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [endereco, setEndereco] = useState('')
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
                    label="Endereço" 
                    placeholder="Digite seu endereço"
                    valor={endereco}
                    aoAlterar={valor => setEndereco(valor)}
                    />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={organizacao} 
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