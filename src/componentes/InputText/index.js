import './InputText.css'

const InputText = (props) => {

    const aoDigitar = (evento) => {
        props.aoAlterar(evento.target.value)
    }

    return (
        <div className="box-input">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )

}

export default InputText