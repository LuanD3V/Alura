import './Formulario.css'
import InputText from '../InputText'
import ListaSuspensa from '../ListaSuspensa'

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
    
    return (
        <section className='box-form'>
            <form>
                <h2>Preencha os dados para criar o Card</h2>
                <InputText label="Nome" placeholder="Digite seu nome" />
                <InputText label="Cargo" placeholder="Digite seu cargo" />
                <InputText label="Endereço" placeholder="Digite seu endereço" />
                <ListaSuspensa itens={organizacao} />
            </form>
        </section>
    )
}

export default Formulario