import { animated, useSpring } from '@react-spring/web'
import "./index.css"
import { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import { useStorage } from '../../hooks';

export default function Modal({ style, modal }) {
    const storage = useStorage()
    const [listName, setListName] = useState("")
    const [tarefas, setTarefas] = useState([""])
    const [calendar, setCalendar] = useState(new Date())
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
            height: style == "slide-right active" ? "85vh" : 0
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

    function handleClick(){
        storage.setTask(listName, calendar, tarefas)
    }
    console.log(localStorage.getItem("task"))
    return (
        <div
            className={`${style} container-new`} style={styles}>
            <div className='container-second'>
                <label>Nome da Lista
                </label>
                <input onChange={(e) => setListName(e.target.value)}></input>
                <Calendar minDate={new Date()} onChange={(e) => setCalendar(moment(e).format("DD/MM/YYYY"))} value={calendar} />
                <label>Tarefas</label>
                {input.map((data, id) => {
                    return (
                        <div key={id}>
                            <input onChange={(e) => handleChange(e.target.value, id)}></input>
                            <button onClick={handleDelete}>-</button>
                        </div>
                    )
                })}
                <button onClick={handleAdd}>Adicionar tarefa</button>
                <button onClick={handleClick}>Criar Lista</button>
            </div>
        </div>

    )
}