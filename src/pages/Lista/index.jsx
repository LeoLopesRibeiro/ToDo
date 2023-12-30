import { useLocation } from "react-router-dom";

export default function List(){
    const { state } = useLocation();
    const task = JSON.parse(state.data)

    console.log(task)
    return(
        <div>
            <p>{task.nome}</p>
        </div>
    )
}