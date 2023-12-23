import { FaPlus } from "react-icons/fa";
import "./index.css"
export default function NewTask() {

    return (
        <div className="container-task" >
            <div className="align">
                <div className="container-round">
                    <FaPlus size={30} />
                </div>
            </div>
                <div className="container-down">
                    <p id="nova">Nova Tarefa</p>
                </div>
        </div>
    )
}