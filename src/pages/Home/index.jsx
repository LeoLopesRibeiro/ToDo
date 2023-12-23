import { useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import NewTask from "../../components/NewTaskCard";
import './index.css'
import Modal from "../../components/ModalNewTask";
export default function Home() {
    const [modal, setModal] = useState(false)
    
    console.log(modal)
    return (
        <div className="container-home">
            <Modal style={modal ? "slide-right" : "slide-left"} modal={modal}/>
            <div onClick={() => setModal(!modal)}>
                <NewTask />
            </div>
        </div>
    )
}