import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

export const useStorage = () => ({
  setTheme: (theme) => {
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      return error;
    }
  },
  verifyTheme: () => {
    try {
      const theme = localStorage.getItem("theme");
      return theme;
    } catch (error) {
      return error;
    }
  },
  setTask: (nome, data, tarefa, cor) => {
    const task = {
      nome: nome,
      data: data,
      cor: cor,
      tarefas: tarefa,
    };
    let newTask;
    let taskLocal = localStorage.getItem("task");

    if (taskLocal == null) {
      newTask = [task];
      localStorage.setItem("task", JSON.stringify(newTask));
      return window.location.reload();
    } else {
      const format = JSON.parse(taskLocal);
      console.log(format);
      for (let i = 0; i < format.length; i++) {
        console.log(task.nome === format[i].nome, "or");
        if (task.nome === format[i].nome) {
          return toast.warn("A lista já existe!", {
        position: toast.POSITION.TOP_RIGHT
      });
        } else if (i + 1 == format.length) {
          format.push(task);
          localStorage.setItem("task", JSON.stringify(format));
          return window.location.reload();
        }
      }
    }
  },
  takeTask: () => {
    return localStorage.getItem("task");
  },
  editTask: (data, tarefa) => {
    const taskEdited = {
      nome: data.nome,
      data: data.data,
      cor: data.cor,
      tarefas: tarefa,
    };
    const formated = JSON.parse(localStorage.getItem("task"));
    const filter = formated.filter((nomeLista) => nomeLista.nome === data.nome);
    const index = formated.indexOf(filter[0]);
    formated.splice(index, 1);
    formated.push(taskEdited);
    // console.log(formated, "formatado");

    localStorage.setItem("task", JSON.stringify(formated));
    return window.location.reload();
  },
  deleteTask: (nome) => {
    console.log(nome)
    const formated = JSON.parse(localStorage.getItem("task"));
    const filter = formated.filter((nomeLista) => nomeLista.nome === nome);
    const index = formated.indexOf(filter[0]);
    formated.splice(index, 1);
    localStorage.setItem("task", JSON.stringify(formated));
    // console.log(formated)
    return window.location.href("/");
  },
  searchOneTask: (nome) => {
    const formated = JSON.parse(localStorage.getItem("task"));
    const filter = formated.filter((nomeLista) => nomeLista.nome === nome);
   return filter[0]
  },
});
