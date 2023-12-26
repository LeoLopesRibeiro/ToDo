export const useStorage = () => ({
    setTheme: (theme) => {
        try {
            localStorage.setItem('theme', theme)    
        } catch (error) {
            return error
        }
    },
    verifyTheme: () => {
        try {
            const theme = localStorage.getItem('theme')
            return theme
        } catch (error) {
            return error
        }
    },
    setTask: (nome, data, tarefa)=>{
        const task = {
            nome: nome,
            data: data,
            tarefas: tarefa
        }
        let newTask
        let taskLocal = localStorage.getItem("task")
        if(taskLocal == null){
            newTask = `${JSON.stringify(task)}`
        }else{
            newTask = `${taskLocal}, ${JSON.stringify(task)}`
        }
        

        
        localStorage.setItem("task", newTask)
    }
})