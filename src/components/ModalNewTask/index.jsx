// import 'react-calendar/dist/Calendar.css';
import { animated, useSpring } from '@react-spring/web'
import "./index.css"
import { useState } from 'react'
import Calendar from 'react-calendar';
import './calendar.css'
import moment from 'moment';
import { useStorage } from '../../hooks';

export default function Modal({ style, modal }) {
    const storage = useStorage()
    const [listName, setListName] = useState("")
    const [tarefas, setTarefas] = useState([""])
    const [calendar, setCalendar] = useState(new Date())
    const [dataSelecionada, seDataSelecionada] = useState("")
    const [input, setInput] = useState([])
    let styles

    if (screen.width > 600) {
        styles = {
            width: style == "slide-right active" ? "40vw" : 0,
            height: style == "slide-right active" ? "85vh" : 0
        }
    } else {
        styles = {
            width: style == "slide-right active" ? "100vw" : 0,
            height: style == "slide-right active" ? "85vh" : 0,
        }
    }
    function handleAdd() {
        const newInput = [...input, []]
        setInput(newInput)
    }

    function handleChange(data, id) {
        const inputValue = [...tarefas]
        inputValue[id] = data
        setTarefas(inputValue)
    }

    function handleDelete(id) {
        const deleteInput = [...input]

        deleteInput.splice(id, 1)
        setInput(deleteInput)
    }

    function handleClick() {
        storage.setTask(listName, calendar, tarefas)
    }
    return (
        <div className={`${style} container-new`} style={styles}>
            <div className='container-second' >

                <label>Nome da Lista
                </label>
                <input className='input' onChange={(e) => setListName(e.target.value)}></input>

                {dataSelecionada ? <p className='data'>Data selelecionada {calendar}</p> : null}

                <Calendar minDate={new Date()} onChange={(e) => { setCalendar(moment(e).format("DD/MM/YYYY")), seDataSelecionada(calendar) }} value={calendar} />

                <label>Tarefas</label>
                {input.map((data, id) => {
                    return (
                        <div className='over' key={id}>
                            <input className='inputs' onChange={(e) => handleChange(e.target.value, id)}></input>
                            <button className='remove' onClick={handleDelete}>-</button>
                        </div>
                    )
                })}
                <button className='button-add' onClick={handleAdd}>Adicionar tarefa</button>
                <button className='button-add' onClick={handleClick}>Criar Lista</button>
            </div>
        </div>

    )
}