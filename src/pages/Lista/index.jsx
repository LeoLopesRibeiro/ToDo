import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useStorage } from "../../hooks";
import "./index.css";

export default function List() {
  const storage = useStorage();
  const { state } = useLocation();
  //eslint-disable-next-line
  const [task, setTask] = useState(storage.searchOneTask(state.data.nome));
  const [newTask, setNewTasks] = useState([]);
  const [taskExisted, setTaskExisted] = useState(task.tarefas);
  const [inputEdit, setInputEdit] = useState(true);


  let count = 0;
  // task.tarefas.forEach((dados) => {
  //   if (dados.includes("%")) {
  //     count++;
  //   }
  // });
  function handleChangeExisted(data, id) {
    const inputValue = [...taskExisted];
    inputValue[id] = data;
    let value = inputValue;
    setTaskExisted(value);
  }

  function edit() {
    if (newTask.length > 0) {
      const teste = taskExisted.concat(newTask);
      console.log(teste);
      storage.editTask(task, teste);
    } else {
      storage.editTask(task, taskExisted);
    }
  }

  function tarefaCompleta(id) {
    let tasksLocal = [...taskExisted];
    if (tasksLocal[id] === `${task.tarefas[id]}%`) {
      tasksLocal[id] = task.tarefas[id];
      console.log("ei");
    } else {
      tasksLocal[id] = `${tasksLocal[id]}%`;
    }
    setTaskExisted(tasksLocal);
  }

  function handleChange(data, id) {
    const inputValue = [...newTask];
    inputValue[id] = data;
    let value = inputValue;
    setNewTasks(value);
  }
  function handleAdd() {
    const newInput = [...newTask, []];
    setNewTasks(newInput);
  }
  function handleDelete(id) {
    const deleteInput = [...newTask];

    deleteInput.splice(id, 1);
    setNewTasks(deleteInput);
  }

  return (
    <div className="container-list">
      <div className="container-list-name">
        <h2 className="name">{task.nome}</h2>
        <p className="numberTasks">
          {count}/{task.tarefas.length} Completas
        </p>
      </div>
      <div className="container-content">
        {task.tarefas != null
          ? task.tarefas.map((data, id) => {
              return (
                <div key={id} className="tarefas-map">
                  {data.includes("%") ? (
                    <p className="tarefaCompleta">{data.replace("%", "")}</p>
                  ) : (
                    <div className="container-inputs">
                      <div className="checkbox-wrapper-13" style={{}}>
                        <input onChange={() => tarefaCompleta(id)} type="checkbox" />
                      </div>
                      <input
                        className="input-lista"
                        placeholder={data}
                        onChange={(e) => {
                          handleChangeExisted(e.target.value, id);
                        }}
                        style={{ color: "#000" }}
                        disabled={inputEdit}
                      ></input>
                      <button
                        className="edit"
                        onClick={() => setInputEdit(!inputEdit)}
                      >
                        editar
                      </button>
                    </div>
                  )}
                </div>
              );
            })
          : null}
        {newTask.map((data, id) => {
          return (
            <div className="over" key={id}>
              <input
                className="input-lista"
                onChange={(e) => handleChange(e.target.value, id)}
              ></input>
              <button className="remove" onClick={handleDelete}>
                -
              </button>
            </div>
          );
        })}
        <div className="buttons">
          <button className="" onClick={handleAdd}>
            Adicionar tarefa
          </button>

          <button className="" onClick={edit}>
            Editar Lista
          </button>
        </div>
      </div>
    </div>
  );
}
