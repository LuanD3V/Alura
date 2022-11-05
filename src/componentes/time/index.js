import Colaborador from '../Colaborador'
import './time.css'

const Time = (props) => {

    return (
        <section className='containerTime' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nomeTime}</h3>
            <Colaborador />
        </section>
    )
}

export default Time