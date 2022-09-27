import './Formulario.css'
import InputText from '../InputText'
import ListaSuspensa from '../ListaSuspensa'
import Button from '../Button'

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
        evento.preventDeault()
        console.log("O formulário foi salvo")
    }
    
    return (
        <section className='box-form'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o Card</h2>
                <InputText obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <InputText obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <InputText obrigatorio={true} label="Endereço" placeholder="Digite seu endereço" />
                <ListaSuspensa obrigatorio={true} label="Time" itens={organizacao} />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Formulario