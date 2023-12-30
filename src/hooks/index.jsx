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
      newTask = `${JSON.stringify(task)}`;
    } else {
      let taskLines = taskLocal.split("#");
      for (let i = 0; i < taskLines.length; i++) {
        console.log(taskLines.length == i);
        if (task.nome === JSON.parse(taskLines[i]).nome) {
          return alert("A lista já existe");
        } else if (i + 1 == taskLines.length) {
          console.log("eewe");
          newTask = `${taskLocal}#${JSON.stringify(task)}`;
          localStorage.setItem("task", newTask);
          return window.location.reload();
        }
      }
    }
  },
  takeTask: () => {
    try {
      return localStorage.getItem("task");
    } catch (error) {
      console.log(error);
    }
  },
});
