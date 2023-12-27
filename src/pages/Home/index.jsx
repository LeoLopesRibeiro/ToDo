import { useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import NewTask from "../../components/NewTaskCard";
import './index.css'
import Modal from "../../components/ModalNewTask";
import { useStorage } from "../../hooks";
export default function Home() {
    const storage = useStorage()
    const [modal, setModal] = useState(false)
    const [active, setActive] = useState("inactive")
    // const [local, setLocal] = useState(storage.takeTask)
    const [ task, setTask]=  useState(storage.takeTask)
    let taskLines = task.split("#");

    // setTask(strLines)

    // setTask(task.split("#"))

    // console
    return (
        <div className="container-home">
            <Modal style={modal ? `slide-right ${active}` : `slide-left ${active}`} />
            {taskLines != null ? taskLines.map((data, id) => {
                const certo = JSON.parse(data)  
                console.log(certo)
                return (
                    <p style={{ height: 30 }}>{certo.nome}</p>
                )
            }) : <>Nada</>}
            <div className="click" onClick={() => { setModal(!modal), setActive("active") }}>
                <NewTask />
            </div>
        </div>
    )
}