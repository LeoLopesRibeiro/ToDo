// import 'react-calendar/dist/Calendar.css';
import "./index.css";
import { useState } from "react";
import Calendar from "react-calendar";
import "./calendar.css";
import moment from "moment";
import { useStorage } from "../../hooks";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
//eslint-disable-next-line
export default function Modal({ style, modal }) {
  const storage = useStorage();
  const [listName, setListName] = useState("");
  const [tarefas, setTarefas] = useState([""]);
  const [calendar, setCalendar] = useState(new Date());
  const [dataSelecionada, seDataSelecionada] = useState("");
  const [cor, setCor] = useState("");
  const [input, setInput] = useState([]);

  let styles;

  if (screen.width > 600) {
    styles = {
      width: style == "slide-right active" ? "40vw" : 0,
      height: style == "slide-right active" ? "85vh" : 0,
    };
  } else {
    styles = {
      width: style == "slide-right active" ? "100vw" : 0,
      height: style == "slide-right active" ? "85vh" : 0,
    };
  }
  function handleAdd() {
    const newInput = [...input, []];
    setInput(newInput);
  }

  function handleChange(data, id) {
    const inputValue = [...tarefas];
    inputValue[id] = data;
    setTarefas(inputValue);
  }

  function handleDelete(id) {
    const deleteInput = [...input];

    deleteInput.splice(id, 1);
    setInput(deleteInput);
  }

  function handleClick() {
    console.log(tarefas.length);
    if (listName.length < 1 || tarefas[0].length < 1) {
      return  toast.warn("Há campos não preenchidos", {
        position: toast.POSITION.TOP_RIGHT
      });

    } else {
      storage.setTask(listName, calendar, tarefas, cor);
    }
  }
  return (
    <div className={`${style} container-new`} style={styles}>
      <ToastContainer
      
      />
      <div className="container-second">
        <label>Nome da Lista</label>
        <input
          className="input"
          onChange={(e) => setListName(e.target.value)}
          maxLength="18"
        ></input>

        {dataSelecionada ? (
          <p className="data">Data selelecionada {calendar}</p>
        ) : null}

        <Calendar
          minDate={new Date()}
          onChange={(e) => {
            setCalendar(moment(e).format("DD/MM/YYYY")),
              seDataSelecionada(calendar);
          }}
          value={calendar}
        />
        <label>Cor da Lista</label>
        <select
          className="input"
          onChange={(e) => setCor(e.target.value)}
          name="cores"
          defaultValue="6495ED"
        >
          <option value="6495ED">Azul</option>
          <option value="F4C430">Amarelo</option>
          <option value="FFB200">Laranja</option>
          <option value="9F2B68">Rosa</option>
          <option value="8F00FF">Roxo</option>
          <option value="2AAA8A">Verde</option>
          <option value="C41E3A">Vermelho</option>
        </select>
        {cor.length > 0 ? (
          <span
            style={{
              width: "100%",
              backgroundColor: `#${cor}`,
              height: "20px",
              borderRadius: "5px",
            }}
          ></span>
        ) : null}

        <label>Tarefas</label>
        {input.map((data, id) => {
          return (
            <div className="over" key={id}>
              <input
                className="inputs"
                onChange={(e) => handleChange(e.target.value, id)}
              ></input>
              <button className="remove" onClick={handleDelete}>
                -
              </button>
            </div>
          );
        })}
        <button className="button-add" onClick={handleAdd}>
          Adicionar tarefa
        </button>
        <button className="button-add" onClick={handleClick}>
          Criar Lista
        </button>
      </div>
    </div>
  );
}
