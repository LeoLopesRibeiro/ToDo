import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useStorage } from "../../hooks";
import "./index.css";

export default function List() {
  const storage = useStorage();
  const { state } = useLocation();
  const [task, setTask] = useState(state.data);
  const [newTask, setNewTasks] = useState([]);
  const [taskExisted, setTaskExisted] = useState(task.tarefas);
  const [inputEdit, setInputEdit] = useState(true);
  // console.log(state.data)
  function handleChangeExisted(data, id) {
    const inputValue = [...taskExisted];
    inputValue[id] = data;
    let value = inputValue;
    setTaskExisted(value);
  }
  //   console.log(taskExisted)

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
  console.log(taskExisted);

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
      <p>{task.nome}</p>
      <button onClick={edit}>clica</button>
      {task.tarefas != null
        ? task.tarefas.map((data, id) => {
            // console.log(data);
            return (
              <div key={id}>
                {data.includes("%") ? (
                  <p className="tarefaCompleta">{data.replace("%", "")}</p>
                ) : (
                  <>
                    <label className="teste">
                      <input
                        type="checkbox"
                        onChange={() => tarefaCompleta(id)}
                      />
                    </label>
                    <input
                      placeholder={data}
                      onChange={(e) => {
                        handleChangeExisted(e.target.value, id);
                      }}
                      style={{ color: "#000" }}
                      disabled={inputEdit}
                    ></input>
                    <button onClick={() => setInputEdit(!inputEdit)}>
                      editar
                    </button>
                  </>
                )}
              </div>
            );
          })
        : null}
      {newTask.map((data, id) => {
        return (
          <div className="over" key={id}>
            <input
              // className="inputs"
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
    </div>
  );
}
