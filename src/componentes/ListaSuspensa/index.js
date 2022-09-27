import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    return (
        <div>
            <label>{props.label}</label>
            <select>
                {props.item.map(item => <option>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa
