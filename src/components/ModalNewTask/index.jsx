import { animated, useSpring } from '@react-spring/web'
import "./index.css"
import { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
export default function Modal({ style, modal }) {
    const [listName, setListName] = useState("")
    const [tarefas, setTarefas] = useState([""])
    const [calendar, setCalendar] = useState(new Date())
    const [input, setInput] = useState([])


    console.log(calendar)
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
    return (
        <div className={`${style} container-new`} style={{ width: style == "slide-right active" ? "40vw" : 0 }}>
            <div className='container-second'>
                <label>Nome da Lista
                </label>
                    <input onChange={(e) => setListName(e.target.value)}></input>
                    <Calendar  onChange={setCalendar} value={calendar} />
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
            </div>
        </div>

    )
}