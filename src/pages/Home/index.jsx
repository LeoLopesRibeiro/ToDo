import { useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import NewTask from "../../components/NewTaskCard";
import './index.css'
import Modal from "../../components/ModalNewTask";
export default function Home() {
    const [modal, setModal] = useState(false)
    const [active, setActive] = useState("inactive")

    
    return (
        <div className="container-home">
            <Modal style={modal ? `slide-right ${active}` : `slide-left ${active}`}/>
            <div className="click" onClick={() => {setModal(!modal), setActive("active")}}>
                <NewTask />
            </div>
        </div>
    )
}