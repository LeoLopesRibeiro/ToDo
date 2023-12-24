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
        localStorage.setItem("task", task)
    }
})