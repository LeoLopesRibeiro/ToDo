import { useContext } from "react"
import { ThemeContext } from "../../context/theme"
import './index.css'
import { Outlet } from "react-router-dom"

export default function Header() {
    const today = new Date()
    const dia = today.getDate()
    const meses = today.getMonth() + 1
    const ano = today.getFullYear()
    let mes = ""
    switch (meses) {
        case 1:
            mes = "Janeiro"
            break;
        case 2:
            mes = "Fevereiro"
            break;
        case 3:
            mes = "Março"
            break;
        case 4:
            mes = "Abril"
            break;
        case 5:
            mes = "Maio"
            break;
        case 6:
            mes = "Junho"
            break;
        case 7:
            mes = "Julho"
            break;
        case 8:
            mes = "Agosto"
            break;
        case 9:
            mes = "Setembro"
            break;
        case 10:
            mes = "Outubro"
            break;
        case 11:
            mes = "Novembro"
            break;
        case 12:
            mes = "Dezembro"
            break;
    }

    const { theme, toggle } = useContext(ThemeContext)
    return (
        <>
            <div className="container-principal">
                <div>
                    <h1 className="tittle" >ToDo <span>List</span></h1>
                    <p className="date">{`${dia} de ${mes}, ${ano}`}</p>
                </div>
                <span className={`container ${theme} theme`} onClick={toggle}>Nada</span>
            </div>
            <Outlet />
        </>
    )
}