import './InputText.css'

const InputText = (props) => {

    return (
        <div className="box-input">
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )

}

export default InputText